#!/usr/bin/env python3.5
import json
import sys
from pprint import pprint

import mysql.connector
from mysql.connector import errorcode

def main(argv):
    print(argv)
    result = {}
    try:
        with open(argv[0], 'r') as f:
            i = 0
            for line in f:
                # remove the new line to keep only the values
                line = line.replace("\n","")
                # keep the headers aside
                if i == 0:
                    headers = line.split(';')
                    print("headers")
                    pprint(headers)
                else:
                    id = line.split(';')[0]
                    j = convert_to_json(line, headers)
                    if id not in result:
                        result[id] = []
                    result[id].append(j)
                i = i+1
        #pprint(result)
        insert_db(result)
    except Exception as e:
        import traceback
        traceback.print_exc()

def convert_to_json(line, headers):
    j = {}
    for index, h in enumerate(headers):
        value = line.split(';')[index]
        # we don't want the id in the json
        if index != 0 and value:
            j[h] = value
    return j

def insert_db(result):
    
    config = {
        'user': 'homestead',
        'password': 'secret',
        'host': '192.168.10.10',
        'database': 'nutrition'
    }
    
    cnx = cur = None
    try:
        cnx = mysql.connector.connect(**config)
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print('Something is wrong with your user name or password')
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        cur = cnx.cursor()
        for id, portions in result.items():
            print(json.dumps(portions))
            cur.execute("UPDATE foods SET portions='"+json.dumps(portions)+"' WHERE id="+id+";")
            # Make sure data is committed to the database
            cnx.commit()
            #for row in cur.fetchall():
            #    print(row)
    finally:
        if cur:
            cur.close()
        if cnx:
            cnx.close()

if __name__ == '__main__':
    main(sys.argv[1:])
