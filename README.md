# Cryptographic Key Generation Using Grammar-Based Systems

A modern web application for generating cryptographic keys using Context-Free Grammar (CFG) based systems. The application provides a comprehensive interface for key generation, parse tree visualization, entropy analysis, and AES encryption/decryption.

## Features

### 1. **Grammar Mode Selection**
- **Multiple Selection Support**: Select one or more grammar modes to combine in key generation
- **Available Modes**:
  - **Numeric**: Numbers only (0-9)
  - **Alphabetic**: Letters only (a-z, A-Z)
  - **Alphanumeric**: Letters and numbers (a-z, A-Z, 0-9)
  - **Symbolic**: Special characters only
- Combine multiple modes for enhanced key diversity

### 2. **Grammar-Based Key Generation**
- Randomized CFG derivations for high entropy
- Configurable key length
- Unique structure generation using descriptive nonterminal names
- Single source of truth for generated keys

### 3. **Stepwise Parse Tree Visualization**
- Animated step-by-step derivation process
- Interactive controls (Play, Pause, Reset, Slider)
- Color-coded symbols (blue for nonterminals, green for terminals)
- Complete derivation history

### 4. **Tree View Visualization**
- Full parse tree structure display
- Proper node alignment and layout
- SVG-based rendering with automatic scaling
- Supports deep tree structures (3+ levels)
- Handles all terminal characters including special symbols like `|`

### 5. **Key Entropy Indicator**
- Shannon entropy calculation
- Visual color-coded bar (red → yellow → green)
- Entropy quality assessment
- Maximum entropy comparison

### 6. **AES Encryption/Decryption**
- AES-GCM authenticated encryption
- Encrypt/decrypt text using generated keys
- PBKDF2 key derivation
- Secure nonce generation
- Base64 encoded output

## Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server
- **Cryptography** - AES-GCM encryption
- **Pydantic** - Data validation

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Multi-page navigation
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library
- **Framer Motion** - Animation library
- **Axios** - HTTP client

## Project Structure

```
TOA_Project/
├── backend/
│   ├── core/
│   │   ├── cfg_generator.py      # CFG-based key generation
│   │   ├── entropy.py             # Shannon entropy calculation
│   │   └── aes_crypto.py          # AES-GCM encryption/decryption
│   ├── routers/
│   │   ├── cfg.py                 # CFG endpoints
│   │   ├── entropy.py             # Entropy endpoints
│   │   └── aes.py                 # AES endpoints
│   └── main.py                    # FastAPI application
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx           # Landing page
│   │   │   ├── KeyGenerator.jsx   # Key generation page
│   │   │   ├── ParseTree.jsx      # Parse tree visualization page
│   │   │   └── Encryption.jsx     # Encryption/decryption page
│   │   ├── components/
│   │   │   ├── GrammarModeSelection.jsx
│   │   │   ├── KeyGenerator.jsx
│   │   │   ├── ParseTreeVisualization.jsx
│   │   │   ├── EntropyIndicator.jsx
│   │   │   └── AESEncryption.jsx
│   │   └── api/
│   │       └── api.js              # API client
│   └── package.json
├── requirements.txt
└── README.md
```

## Installation

### Prerequisites
- Python 3.12+ 
- Node.js 18+ and npm
- pip (Python package manager)

### Backend Setup

1. Navigate to the project directory:
```bash
cd TOA_Project
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Start the backend server:
```bash
python -m uvicorn backend.main:app --reload --port 8001
```

The backend API will be available at `http://localhost:8001`
- API Documentation: `http://localhost:8001/docs`
- Health Check: `http://localhost:8001/api/health`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend application will be available at `http://localhost:5174`

## Usage

### Generating Keys

1. Navigate to the **Generate** page
2. Select one or more grammar modes (Numeric, Alphabetic, Alphanumeric, Symbolic)
3. Optionally set a key length (default: 16 characters)
4. Click **Generate Key**
5. View the generated key, entropy analysis, and parse tree

### Viewing Parse Tree

1. After generating a key, click **View Parse Tree** button
2. Or navigate to the **Parse Tree** page from the menu
3. Switch between **Stepwise** and **Tree View** modes
4. Use controls to step through the derivation process

### Encryption/Decryption

1. Navigate to the **Encryption** page
2. Enter or paste your encryption key
3. Enter plaintext to encrypt
4. Click **Encrypt** to get encrypted data and nonce
5. Click **Decrypt** to recover the original plaintext

## API Endpoints

### CFG Endpoints

#### Get Available Modes
```
GET /api/cfg/modes
```

#### Generate Key
```
POST /api/cfg/generate
Body: {
  "modes": ["numeric", "alphabetic", "alphanumeric", "symbolic"],
  "length": 16  // optional
}
```

### Entropy Endpoints

#### Calculate Entropy
```
POST /api/entropy/calculate
Body: {
  "text": "your_key_here"
}
```

### AES Endpoints

#### Encrypt
```
POST /api/aes/encrypt
Body: {
  "plaintext": "text to encrypt",
  "key": "encryption_key"
}
```

#### Decrypt
```
POST /api/aes/decrypt
Body: {
  "encrypted": "base64_encrypted_data",
  "nonce": "base64_nonce",
  "key": "encryption_key"
}
```

## Security Features

- **High Entropy Keys**: CFG-based generation ensures randomness
- **AES-GCM Encryption**: Authenticated encryption with Galois/Counter Mode
- **PBKDF2 Key Derivation**: Secure key derivation from user input
- **Unique Nonces**: Each encryption uses a unique nonce
- **Shannon Entropy Analysis**: Mathematical assessment of key strength

## Design Features

- **Dark Theme**: Professional dark theme with contrasting colors
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for better UX
- **Color-Coded Visualization**: 
  - Blue: Nonterminals (Start, Terminal)
  - Green: Terminals (actual characters)
- **Multi-Page Navigation**: Clean separation of features

## Grammar System

The CFG generator uses descriptive nonterminal names:
- **Start**: Root nonterminal
- **Terminal**: Terminal symbol nonterminal

This allows uppercase letters (A-Z) to be treated as terminals without conflicts.

### Example Grammar Rules:
```
Start → Terminal Terminal Terminal ...
Terminal → 0 | 1 | 2 | ... | a | b | ... | A | B | ... | ! | @ | ...
```

## Entropy Calculation

The system calculates Shannon entropy using the formula:
```
H(X) = -Σ P(x) * log₂(P(x))
```

Where:
- `P(x)` is the probability of character `x` in the key
- Higher entropy indicates better cryptographic strength

## Troubleshooting

### Backend Issues
- **Port already in use**: Change the port in `uvicorn` command or stop the existing process
- **Module not found**: Ensure you're in the project root and dependencies are installed
- **CORS errors**: Check that the frontend URL is in the CORS allowed origins

### Frontend Issues
- **Build errors**: Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- **API connection errors**: Verify backend is running on port 8001
- **Parse tree not displaying**: Ensure you've generated a key first

## Future Enhancements

- Export parse tree as image/PDF
- Key strength recommendations
- Multiple encryption algorithms
- Key history and management
- Custom grammar rule definitions
- Batch key generation
- Key comparison tools
