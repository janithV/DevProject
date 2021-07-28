import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from scipy import sparse
import sqlalchemy


engine =sqlalchemy.create_engine('mysql+pymysql://root:@localhost:3306/recommenderdb')



users_dataset=pd.read_sql_table("users",engine)
print (users_dataset)

def get_userid_from_index(index):
	return users_dataset[users_dataset.index == index]["userid"].values[0]


def get_index_from_userid(userid):
	return users_dataset[users_dataset.userid == userid]["index"].values[0]


def combine_features(row):
  return row['softwaredev']+" "+row['frontend']+" "+row['backend']+" "+row['fullstack']+" "+row['mad']+" "+row['webdev']+" "+row['degreeid']

users_dataset["combined_features"]= users_dataset.apply(combine_features, axis=1)

print (users_dataset["combined_features"].head())

countVectorizer = CountVectorizer()

count_matrix = countVectorizer.fit_transform(users_dataset["combined_features"])

cosineSimalirity = cosine_similarity(count_matrix)

print(cosineSimalirity)

print("")
newUserId="UID965"
user_index=get_index_from_userid(newUserId)
print (user_index)

similar_users=list(enumerate(cosineSimalirity[user_index-1]))
sorted_similar_users= sorted(similar_users,key=lambda x:x[1], reverse=True)

print("")
sim_users=[]
i=0
for user in sorted_similar_users:
  sim_user=get_userid_from_index(user[0])
  sim_users.append(sim_user)
  i=i+1
  if i>5:
    break

print(sim_users)