#!/usr/bin/env python
# coding: utf-8

# # Librerias

# In[6]:


import psycopg2
import time


# # Conexion base de datos

# In[5]:


while True:
    try:
        conn = psycopg2.connect(
            host="postgres",
            database="isw",
            user="user",
            password="pass")
        break
    except:
        print("Waiting for postgres to be ready")
        time.sleep(1)

cur = conn.cursor()


# # Tablas

# In[3]:


sqlusers = """CREATE TABLE IF NOT EXISTS users (
        ID_Usuario SERIAL PRIMARY KEY,
        Nombre varchar(32) NOT NULL,
        Apellido varchar(32) NOT NULL,
        Mail varchar(32) NOT NULL,
        Contrasena varchar(8) NOT NULL,
        Edad integer NOT NULL,
        )"""
sqlCliente = """CREATE TABLE IF NOT EXISTS Cliente (
        ID_Cliente SERIAL PRIMARY KEY,
        ID_Usuario INTEGER, 
        FOREIGN KEY(ID_Usuario) REFERENCES users(ID_Usuario)
        )"""
sqlAdministrador = """CREATE TABLE IF NOT EXISTS Administrador (
        ID_Administrador SERIAL PRIMARY KEY,
        ID_Usuario INTEGER,
        FOREIGN KEY(ID_Usuario) REFERENCES users(ID_Usuario)
        )"""
sqlUsuario_Administrador = """CREATE TABLE IF NOT EXISTS Usuario_Administrador (
        ID_Usuario_Administrador SERIAL PRIMARY KEY,
        ID_Administrador INTEGER,
        ID_Usuario INTEGER,
        FOREIGN KEY(ID_Administrador) REFERENCES Administrador(ID_Administrador),
        FOREIGN KEY(ID_Usuario) REFERENCES users(ID_Usuario)
        )"""


# # Creacion tablas

# In[4]:


sqlQuery = [sqlusers,sqlCliente,sqlAdministrador,sqlUsuario_Administrador]
def createTables():
    # create tables
    for sql in sqlQuery:
        cur.execute(sql)
    conn.commit()


# In[ ]:




