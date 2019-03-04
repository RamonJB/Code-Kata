# 03/02/19

'''
  6 Kyu
  Problem provided by https://www.codewars.com/kata/playing-with-digits
'''

def dig_pow(n, p):
	n_digits_array = [int(x) for x in str(n)]
	n_sum = 0

	for digit in n_digits_array:
		n_sum += pow(digit, p)
		p += 1

	if n_sum % n == 0:
		return n_sum / n

	return -1