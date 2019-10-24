f = open('data1.txt','r')
data = []
for line in f:
    i = (" ".join(line.split()))
    datatemp = i.split(" ")
    datatemp.pop(0)
    if (datatemp[0][0] != '1' and datatemp[0][0] != '2'): 
        #print(datatemp[0][0])
        datatemp.pop(0)
    if (datatemp[3][0] not in ('1','2','3','4','5','6','7','8','9','0')):
        datatemp.pop(3)
    if (datatemp[2] == "res"):
        datatemp.pop(3)
    datatemp.pop(4)
    datatemp.pop(4) 
    datatemp.pop(4)
    datatemp.pop(4)

    datadatatemp = datatemp[0:5]
    datadatatemp.append(datatemp[len(datatemp)-2])
    datadatatemp.append(datatemp[len(datatemp)-1])

    data.append(datadatatemp)

for i in range (len(data)):
    print(data[i])



