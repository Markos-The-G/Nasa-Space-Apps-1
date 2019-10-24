from firebase import firebase


FBConn = firebase.FirebaseApplication('https://space-apps-c1404.firebaseio.com/', None)


print(FBConn)

'''
def runSort(data):
    for i in range (0, len(data)-1):
        if(float(data[i][3]) > float(data[i+1][3])):
            temparr = data[i]
            data[i] = data[i+1]
            data[i+1] = temparr




f = open('data1.txt','r')
data = []
for line in f:
    i = (" ".join(line.split()))
    datatemp = i.split(" ")
    datatemp.pop(0)
    if (datatemp[0][0] != '1' and datatemp[0][0] != '2'): 
        #print(datatemp[0][0])
        datatemp.pop(0)
    datatemp.pop(4)
    datatemp.pop(4)
    datatemp.pop(4)
    datatemp.pop(4)

    datadatatemp = datatemp[0:5]
    datadatatemp.append(datatemp[len(datatemp)-2])
    datadatatemp.append(datatemp[len(datatemp)-1])

    data.append(datadatatemp)

#print(data)


for i in range (50000):
    runSort(data)





print("\n split \n")

    



for j in range (len(data)):
    FBConn.post('/Data/byDistance/', data[j])
    
print("done")
'''