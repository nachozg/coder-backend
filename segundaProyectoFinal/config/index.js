import dotenv from 'dotenv'
dotenv.config()
const MONGO_DB = process.env.MONGO_DB_URI



export default {
  mongodb: {
    conexion: MONGO_DB
  },
  firebase :{
   
    "type": "service_account",
    "project_id": "ecommerce-bc74b",
    "private_key_id": "4e3627965ffee2a5b390f7cedb3d99c70088620f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDT/ZeIsH1j/WsE\n1kBOkEXZ+urky4gQlDcZNTFljKiEPvxlixjAD0Jw69egtdOeTO/c2bvDKLidOWZJ\nQTlUAElDRqxdCt8esd2r+AKgTpThtwSicFZcsEApiHSPwNzd8UP5NUCeTFo8SnEQ\nppaNucId3q54ZJjeMu+2jt+c1fEQBhZIs194Rs3gmZgovFAF8jdW7E4GjPz4hRnL\no5FZVCUmAeX/gEUuWMz83mILvRPBaAVeKsCZ7f4fIMvGSSCQdjIY4DcnrN4TjCUE\nzNyhvNP2rQaMPFzonR9V0uTspZMglhMosayGJ3PqRDLTVgfzc4DD/BnmI3pN0vsb\nUL6HXoe9AgMBAAECggEACY9go5Ht/bHifyPYX5KjC8sEh8/j8Xd1qqXa9ezrdpdO\nk5e7xIGLqgMAxOceRX/Lu2Z4ULtH5BNAGSKfXrnqk+WehU2ltUEpMYWsPKV+klVK\nGLc/NcvfAOB9/TOh4kJsodL0eI8R7LEguzMADCEp72Xo8VX8DN04MT/tNqnxRpsi\no4OCEJBdeolGRulnGQqBalTe9ULvg2tVxlnaeUD/lF7KOmfqlxhKjaBROr1ujZmU\nnHtylIaRsG3tkJLjVJgA+iT9Ekf7JkH3l6ZpIZaJFRUBhUrmzbwNqgj0UfQQrbAq\n4S0w8ySAVL899Aq/itDWYcutZ4GIuxo3P4gnE/SMsQKBgQDy2BWspgYx3mwYKbg6\n6hVFgexCGdmoGw+kcBEHNHjOjbFqkevlRYXir0JNtowaCa8mKybXZg+EI+PwKSm1\nT5gLb3Pdv0s4sNk7DR/f/YGbGLVRcC07qFBmATjh8PUvA2Pr4/aV9WchCwT7l4Op\n23/h5jTzhGMjtSwFrzH3TiRbyQKBgQDfeZyQ0UMpNGTzqJlIC5Hkz2N1i0OoKTgz\n27aAWMlsN7P/deHl8zp0VhwG5umToqmQwtbzYe/ePfeFQVrY6d/KZo6WiWv1qO+l\ncT57JcEee01G/fdNMraJbEgKRF8hvho9rDu/nX0GEEQ45ewhEMXTY4Lgo2nJRFWB\n2i1dJnaeVQKBgFvzY+mWh7v0Ozu++EoefmVuN3Yj8Z1MedTKtjfjL2cOkcIHdKnA\ndFyL/fANEel+BzrNlgxzUaa4LEOwYmGLvMd/sQCiwSm7FNXeN1aJ17xRU759WjM/\nnQmypsYuhbgCcaBNFf5cCGujj4RwL2NugHKZxyz50MwheoTAfIvmo6+5AoGBAM9H\nKkw8fPHUEiraX8ouSRUUsyjMkmWATgvzp7QmJjWE+SRiv7OcxcQwNnDEbzQrtOF7\nhwpZ9bWKfnIP62a0jolaVLkWH5fNKPKoNg7dNuHB9ix51Y66Egsm7y7uudo/THGV\nthmFxvf/0HeB82G7//GRJEyd5bnz8uetaVQ0H+O9AoGBAOKorN8WIgq653iTgqGE\nvVexIXdSaKFtC2YTzNaN/RQFv0lQdOcaBFppqzT4I7N0/pD/k/oRKjAjl1Oyt69t\nQ1IVn/6zqyXrwkl7xNaGA0Mmi5DHhPJrumzBGHe7XCnCVMVktqYXex7utU39XGQ2\n9KscCYx3gSGlzh3WyYSydgLX\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-odgu2@ecommerce-bc74b.iam.gserviceaccount.com",
    "client_id": "108768793088789217768",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-odgu2%40ecommerce-bc74b.iam.gserviceaccount.com"
  }
}