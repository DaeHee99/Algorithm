def solution(arr):
    def gcd(a, b):
        return b if a % b == 0 else gcd(b, a % b)

    def lcm(a, b):
        return a * b // gcd(a, b)

    result = 1
    for val in arr:
        result = lcm(result, val)

    return result
