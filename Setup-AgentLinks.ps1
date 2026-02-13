<#
.SYNOPSIS
    Sets up the AI Agents environment with a hidden central folder (.agent).
.DESCRIPTION
    1. Checks/Creates 'AGENTS.md' (Context) and '.agent/skills' (Tools).
    2. Updates '.gitignore' to exclude generated agent files/folders.
    3. Links popular agent configuration files to the central resources.
    Requires Administrator privileges to create Symlinks.
#>

# --- CONFIGURATION ---
$CentralContextFile = "AGENTS.md"
$CentralAgentFolder = ".agent"
$CentralSkillsFolder = ".agent\skills"

# Files/Folders to ignore in Git (User defined)
$GitIgnoreEntries = @(
    "# Agents Setup",
    ".gemini",
    ".openai",
    ".github",
    ".clinerules",
    ".cursorrules",
    ".windsurfrules",
    "GEMINI.md"
)

# Agent Map: Name -> Configuration
$Agents = @{
    "Cursor AI" = @{
        RuleFile = ".cursorrules"
    }
    "Roo Code (Cline)" = @{
        RuleFile = ".clinerules"
    }
    "Windsurf" = @{
        RuleFile = ".windsurfrules"
    }
    "GitHub Copilot" = @{
        RuleFile = ".github\copilot-instructions.md"
    }
    "Gemini (Custom)" = @{
        RuleFile = "GEMINI.md"
        SkillPath = ".gemini\skills"
    }
    "OpenAI (Custom)" = @{
        SkillPath = ".openai\skills"
    }
}

# --- FUNCTIONS ---

function Update-Gitignore {
    param ([string[]]$Entries)
    
    $GitIgnoreFile = ".gitignore"
    
    # Create .gitignore if it doesn't exist
    if (-not (Test-Path $GitIgnoreFile)) {
        New-Item -ItemType File -Path $GitIgnoreFile | Out-Null
        Write-Host " [+] Created .gitignore file." -ForegroundColor Green
    }

    # Get current content to check for duplicates
    $CurrentContent = Get-Content $GitIgnoreFile -Raw -ErrorAction SilentlyContinue
    if ($null -eq $CurrentContent) { $CurrentContent = "" }

    $NewContent = @()
    foreach ($Entry in $Entries) {
        # Simple check: if entry is not in file, add it
        if ($CurrentContent -notmatch [regex]::Escape($Entry)) {
            $NewContent += $Entry
            Write-Host " [Git] Adding '$Entry' to .gitignore" -ForegroundColor Yellow
        }
    }

    if ($NewContent.Count -gt 0) {
        # Append new entries, ensuring a leading newline
        Add-Content -Path $GitIgnoreFile -Value ("`n" + ($NewContent -join "`n"))
        Write-Host " [v] .gitignore updated." -ForegroundColor Green
    } else {
        Write-Host " [v] .gitignore is already up to date." -ForegroundColor Gray
    }
}

function New-SymLink {
    param (
        [string]$Target, # Source
        [string]$Link    # Destination
    )

    # Check if destination exists
    if (Test-Path -Path $Link) {
        Write-Host " [!] Destination exists: $Link (Skipping)" -ForegroundColor Yellow
        return
    }

    # Create parent dir if needed (e.g., .github for copilot)
    $ParentDir = Split-Path -Path $Link -Parent
    if (-not [string]::IsNullOrEmpty($ParentDir)) {
        if (-not (Test-Path $ParentDir)) {
            New-Item -ItemType Directory -Path $ParentDir | Out-Null
            Write-Host " [+] Directory created: $ParentDir" -ForegroundColor Cyan
        }
    }

    try {
        # Using Resolve-Path to get absolute path for Target to ensure link validity
        New-Item -ItemType SymbolicLink -Path $Link -Target (Resolve-Path $Target).Path | Out-Null
        Write-Host " [OK] Link created: $Link -> $Target" -ForegroundColor Green
    }
    catch {
        Write-Host " [X] Error creating link $Link. Run as Admin." -ForegroundColor Red
        Write-Host "     Detail: $_" -ForegroundColor DarkGray
    }
}

# --- EXECUTION ---

Write-Host "=== Starting AI Agents Context Setup ===" -ForegroundColor Magenta

# 1. SETUP RESOURCES
Write-Host "`n1. Verifying Core Resources (.agent structure)..." -ForegroundColor Cyan

# Check/Create AGENTS.md
if (-not (Test-Path $CentralContextFile)) {
    New-Item -ItemType File -Path $CentralContextFile | Out-Null
    Write-Host " [+] Created '$CentralContextFile' (Empty)." -ForegroundColor Green
}

# Check/Create .agent folder
if (-not (Test-Path $CentralAgentFolder)) {
    New-Item -ItemType Directory -Path $CentralAgentFolder | Out-Null
    Write-Host " [+] Created '$CentralAgentFolder' directory." -ForegroundColor Green
}

# Check/Create .agent/skills folder
if (-not (Test-Path $CentralSkillsFolder)) {
    New-Item -ItemType Directory -Path $CentralSkillsFolder | Out-Null
    Write-Host " [+] Created '$CentralSkillsFolder' directory." -ForegroundColor Green
}

# 2. UPDATE GITIGNORE
Write-Host "`n2. Updating .gitignore..." -ForegroundColor Cyan
Update-Gitignore -Entries $GitIgnoreEntries

# 3. CREATE LINKS
Write-Host "`n3. Linking Agents to Central Resources..." -ForegroundColor Cyan

foreach ($AgentName in $Agents.Keys) {
    $Config = $Agents[$AgentName]
    
    # Link Rules -> AGENTS.md
    if ($Config.ContainsKey("RuleFile")) {
        New-SymLink -Target $CentralContextFile -Link $Config.RuleFile
    }

    # Link Skills -> .agent/skills
    if ($Config.ContainsKey("SkillPath")) {
        New-SymLink -Target $CentralSkillsFolder -Link $Config.SkillPath
    }
}

Write-Host "`n=== Setup Completed Successfully ===" -ForegroundColor Magenta