def quickSort(list):
    listLength = len(list)
    if listLength == 0:
        return []
    else:
        first = list[0]
        smallList = []
        largeList = []
        for i in range(1, listLength):
            item = list[i]
            if item < first:
                smallList.append(item)
            else:
                largeList.append(item)
        return quickSort(smallList) + [first] + quickSort(largeList)

def testQuickSort():
    list1 = [2,1,3]
    list2 = [5,2,6,9,11,4,7,1]
    list3 = [2]
    print(quickSort(list1)==[1,2,3])
    print(quickSort(list2)==[1,2,4,5,6,7,9,11])
    print(quickSort(list3)==[2])

testQuickSort()

# 由于之前工作中没写过单元测试等测试用例，testQuickSort测试用例写的比较low，以后会补充这方面知识。