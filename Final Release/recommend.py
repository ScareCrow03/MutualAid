import numpy as np
import math


index = input()
k = 1
m, n = map(int, input().split())
userItem = list(map(int, input().split()))
matrix = np.zeros((m, n))
for i in range(m):
    matrix[i] = list(map(int, input().split()))
similarity = np.zeros((n, n))
for i in range(n):
    for j in range(n):
        score1 = matrix[:, i]
        score2 = matrix[:, j]
        cos = np.sum(score1*score2)/(math.sqrt(np.sum(score1**2)*np.sum(score2**2)))
        similarity[i][j] = cos
print(similarity)
average = np.sum(matrix[:, int(index)-1])/n
top = 0
bottom = 0
similarItem = sorted(range(n), key=lambda k: similarity[int(index)-1][k], reverse=True)[1:k+1]
print(similarItem)
for i in range(len(similarItem)):
    itemIndex = similarItem[i]
    top = top + similarity[itemIndex, int(index)-1]*(userItem[itemIndex]-np.sum(matrix[:, itemIndex])/n)
    bottom = bottom + similarity[itemIndex, int(index)-1]
ans = average + top/bottom
print(ans)
