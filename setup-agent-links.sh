#!/bin/bash

# ==============================================================================
# SYNOPSIS
#    Sets up the AI Agents environment with a hidden central folder (.agent).
#
# DESCRIPTION
#    1. Checks/Creates 'AGENTS.md' (Context) and '.agent/skills' (Tools).
#    2. Updates '.gitignore' to exclude generated agent files/folders.
#    3. Links popular agent configuration files to the central resources.
#
# USAGE
#    Run from the project root: ./setup-agent-links.sh
# ==============================================================================

# --- CONFIGURATION ---
CENTRAL_CONTEXT_FILE="AGENTS.md"
CENTRAL_AGENT_FOLDER=".agent"
CENTRAL_SKILLS_FOLDER=".agent/skills"

# List of files/folders to ignore in Git
# WARNING: Adding .github to gitignore will ignore all GitHub Actions/Workflows.
IGNORE_ENTRIES=(
    "# Agents Setup"
    ".gemini"
    ".openai"
    ".github"
    ".clinerules"
    ".cursorrules"
    ".windsurfrules"
    "GEMINI.md"
)

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

# --- FUNCTIONS ---

# Function to create a symbolic link
# Arguments: $1 = Target (Source), $2 = Link Name (Destination)
create_symlink() {
    local target=$1
    local link=$2

    # Check if destination exists
    if [ -e "$link" ] || [ -L "$link" ]; then
        echo -e " ${YELLOW}[!] Destination exists: $link (Skipping)${NC}"
        return
    fi

    # Check if parent directory needs to be created
    local parent_dir
    parent_dir=$(dirname "$link")
    
    if [ ! -d "$parent_dir" ]; then
        mkdir -p "$parent_dir"
        echo -e " ${CYAN}[+] Directory created: $parent_dir${NC}"
    fi

    # Create the symlink using absolute path ($PWD) for target validity
    ln -s "$PWD/$target" "$link"

    if [ $? -eq 0 ]; then
        echo -e " ${GREEN}[OK] Link created: $link -> $target${NC}"
    else
        echo -e " ${RED}[X] Error creating link $link.${NC}"
    fi
}

# Function to update .gitignore
update_gitignore() {
    local gitignore_file=".gitignore"

    # Create .gitignore if it doesn't exist
    if [ ! -f "$gitignore_file" ]; then
        touch "$gitignore_file"
        echo -e " ${GREEN}[+] Created .gitignore file.${NC}"
    fi

    # Check and append entries
    for entry in "${IGNORE_ENTRIES[@]}"; do
        # grep -F (fixed string) -q (quiet) -x (exact match line - optional, avoided here for flexibility)
        # We check if the entry exists anywhere in the file
        if ! grep -qF "$entry" "$gitignore_file"; then
            echo "$entry" >> "$gitignore_file"
            echo -e " ${YELLOW}[Git] Adding '$entry' to .gitignore${NC}"
        fi
    done
    
    echo -e " ${GRAY}[v] .gitignore check complete.${NC}"
}

# --- EXECUTION ---

echo -e "${CYAN}=== Starting AI Agents Context Setup ===${NC}"

# 1. SETUP RESOURCES
echo -e "\n${CYAN}1. Verifying Core Resources (.agent structure)...${NC}"

# Check/Create AGENTS.md
if [ ! -f "$CENTRAL_CONTEXT_FILE" ]; then
    touch "$CENTRAL_CONTEXT_FILE"
    echo -e " ${GREEN}[+] Created '$CENTRAL_CONTEXT_FILE' (Empty).${NC}"
else
    echo -e " ${GRAY}[v] Found '$CENTRAL_CONTEXT_FILE'.${NC}"
fi

# Check/Create .agent folder
if [ ! -d "$CENTRAL_AGENT_FOLDER" ]; then
    mkdir -p "$CENTRAL_AGENT_FOLDER"
    echo -e " ${GREEN}[+] Created '$CENTRAL_AGENT_FOLDER' directory.${NC}"
fi

# Check/Create .agent/skills folder
if [ ! -d "$CENTRAL_SKILLS_FOLDER" ]; then
    mkdir -p "$CENTRAL_SKILLS_FOLDER"
    echo -e " ${GREEN}[+] Created '$CENTRAL_SKILLS_FOLDER' directory.${NC}"
fi

# 2. UPDATE GITIGNORE
echo -e "\n${CYAN}2. Updating .gitignore...${NC}"
update_gitignore

# 3. CREATE LINKS
echo -e "\n${CYAN}3. Linking Agents to Central Resources...${NC}"

# --- Cursor AI ---
create_symlink "$CENTRAL_CONTEXT_FILE" ".cursorrules"

# --- Roo Code (Cline) ---
create_symlink "$CENTRAL_CONTEXT_FILE" ".clinerules"

# --- Windsurf ---
create_symlink "$CENTRAL_CONTEXT_FILE" ".windsurfrules"

# --- GitHub Copilot ---
# Note: Since .github is in gitignore, ensure you really want to ignore it entirely.
create_symlink "$CENTRAL_CONTEXT_FILE" ".github/copilot-instructions.md"

# --- Gemini (Custom) ---
create_symlink "$CENTRAL_CONTEXT_FILE" "GEMINI.md"
create_symlink "$CENTRAL_SKILLS_FOLDER" ".gemini/skills"

# --- OpenAI (Custom) ---
create_symlink "$CENTRAL_SKILLS_FOLDER" ".openai/skills"

echo -e "\n${CYAN}=== Setup Completed Successfully ===${NC}"