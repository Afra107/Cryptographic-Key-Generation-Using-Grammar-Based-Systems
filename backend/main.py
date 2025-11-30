from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers import cfg, entropy, aes

app = FastAPI(
    title="Cryptographic Key Generation API",
    description="Grammar-based cryptographic key generation system",
    version="1.0.0"
)

# CORS middleware for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(cfg.router, prefix="/api/cfg", tags=["CFG"])
app.include_router(entropy.router, prefix="/api/entropy", tags=["Entropy"])
app.include_router(aes.router, prefix="/api/aes", tags=["AES"])

@app.get("/")
async def root():
    return {"message": "Cryptographic Key Generation API"}

@app.get("/api/health")
async def health():
    return {"status": "healthy"}

