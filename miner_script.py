import os
import sys

def main():
    wallet = os.environ.get('WALLET_ADDRESS')
    if not wallet:
        print("❌ Error: WALLET_ADDRESS secret not found.")
        sys.exit(1)
    
    print(f"✅ Wallet Linked: {wallet[:6]}...{wallet[-4:]}")
    print("🚀 Mining activity initialized successfully.")

if __name__ == "__main__":
    main()
