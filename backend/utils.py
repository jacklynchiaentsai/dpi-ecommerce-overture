# -*- coding: utf-8 -*-
"""
Created on Sun Mar 13 05:18:02 2022

@author: Bill Sun
"""
from pymongo import MongoClient
from dotenv import dotenv_values

config = dotenv_values(".env.shared")

def get_db():
    client = MongoClient(config["MONGO_URI"])
    return client['overture']

def get_collection(db, col_name):
    if col_name not in db.list_collection_names(): raise KeyError("{} not in db's collections!".format(col_name))
    return db[col_name]
# %%
db = get_db()
collection = get_collection(db, 'product')
# %%
cursor_all = collection.find({})
res = []
for doc in cursor_all: 
    doc['_id'] = str(doc['_id'])
    res.append(doc)
# %%
cursor_category = collection.find({}, {"main_category":"tops"})
res = []
for doc in cursor_category: 
    doc['_id'] = str(doc['_id'])
    res.append(doc)