snumber = 442
Enumber = 504
presentData = [454,450,442,485, 472, 467, 476, 443, 484, 473, 496, 446, 451, 484, 482, 4503, 497, 459, 489, 501, 477, 466, 464, 500, 470, 463, 445, 465, 498, 483, 473, 502, 492, 447, 475]
sortedData = sorted(presentData)
NewPresentData = []
absent = []
print('\n\nsorted\n', sortedData)

print("\n\ntotal\n")
for data in range(snumber, Enumber + 1):
    if data in sortedData:
        NewPresentData.append(data)
    else:
        absent.append(data)

print('\n\n present \n',NewPresentData,'\t',end=",")
print('\n\n absent\n',absent,'\t',end=",")
