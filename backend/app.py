
from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore
import os

app = Flask(__name__)
CORS(app)

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

@app.route("/webhook", methods=["POST"])
def webhook():
    data = request.json
    email = data.get("email")
    url = data.get("url")
    plan = data.get("plan")

    if not email or not url or not plan:
        return jsonify({"error": "Missing data"}), 400

    doc_ref = db.collection("users").document(email)
    doc_ref.set({
        "email": email,
        "url": url,
        "plan": plan
    })

    return jsonify({"success": True}), 200

@app.route("/check", methods=["GET"])
def check():
    email = request.args.get("email")
    doc = db.collection("users").document(email).get()
    if doc.exists:
        return jsonify(doc.to_dict())
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
