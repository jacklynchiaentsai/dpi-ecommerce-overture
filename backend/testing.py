import flask
from flask import request, jsonify
from flask_cors import CORS, cross_origin
import json
import copy

from utils import get_collection, get_db
db = get_db()
# %%
mydata = {"name": "gabe guo"}

collection = get_collection(db, 'testing_bill_collection')
# %%
collection.insert_one(mydata)


# %%
collection = get_collection(db, 'product')
# %%
cursor = collection.find({})
res = []
for doc in cursor: 
    doc['_id'] = str(doc['_id'])
    res.append(doc)
# %%
img_urls = []
for doc in res: img_urls.append(doc['image_url'])
# %%
import requests
import shutil


BASE = "../frontend/src/static/"
for i in range(0, 20):
    img = requests.get(img_urls[i], stream=True)
    with open(BASE+str(i)+".jpg", "wb") as handle:
        shutil.copyfileobj(img.raw, handle)



# %% "sub_category.subcat1":"tees & tanks", 
cursor = collection.find({"collection.gender":"women"})
res = []
for doc in cursor:
    doc['_id'] = str(doc['_id'])
    res.append(doc)
# %%
q = set()
for i, x in enumerate(res): 
    if len(x['sub_category']) > 1: print(i, len(x['sub_category']))
    q.add(x['sub_category']['subcat1'])

# %%
def parse(d):
    res = []
    for key in d:
        for color in d[key]:
            res.extend(d[key][color])
    return res
# %%
out = parse(tmp['images'])
# %%

from bson.objectid import ObjectId
collection = get_collection(db, 'product')
data = {"_id":ObjectId("6243a3d1a1c6a14f0126d2e1")}
cursor = collection.find(data)
res = []
for doc in cursor: 
    doc['_id'] = str(doc['_id'])
    res.append(doc)
    
# %%

BASE_STR = 'import img{} from "../static/{}.jpg"'

for i in range(0,20):
    print(BASE_STR.format(i,i))