import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from bson.objectid import ObjectId

from utils import get_collection, get_db

app = flask.Flask(__name__)
CORS(app)

@app.route('/api/v0/pull_all', methods=['GET'])
def pull_all():
    collection = get_collection(db, 'product')
    cursor = collection.find({})
    res = []
    for doc in cursor: 
        doc['_id'] = str(doc['_id'])
        res.append(doc)
    return {"payload": res[:50]} # keep top 50

@app.route('/api/v0/pull_category', methods=['POST'])
def pull_category():
    data = request.get_json(force=True)
    print(data)
    target = {}
    if "category" in data:
        target["sub_category.subcat1"] = data["category"]
    if "gender" in data:
        target["collection.gender"] = data["gender"]
    
    collection = get_collection(db, 'product')
    cursor = collection.find(target)
    res = []
    for doc in cursor: 
        doc['_id'] = str(doc['_id'])
        res.append(doc)
    return {"payload": res[:50]} # keep top 50

@app.route('/api/v0/pull_specific', methods=['POST'])
def pull_specific():
    data = request.get_json(force=True)
    print(data)
    collection = get_collection(db, 'product')
    cursor = collection.find({"_id": ObjectId(data["_id"])})
    res = []
    for doc in cursor: 
        doc['_id'] = str(doc['_id'])
        res.append(doc)
    return {"payload": res}

@app.route('/api/v0/', methods=['GET'])
def index():
    return "<p>API running!</p>"

if __name__ == '__main__':
    db = get_db() 
    app.run(debug=False)