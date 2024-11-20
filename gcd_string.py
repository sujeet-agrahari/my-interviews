def gcd_string(str1, str2):
    if str1 == str2:
        return str1
    if len(str1) > len(str2):
        str1, str2 = str2, str1
    if str2.startswith(str1):
        return gcd_string(str1, str2[len(str1) :])
    return ""


# print(gcd_string("abcabc", "abc"))
# print(gcd_string("abc", "abcabc"))
print(gcd_string("abc", "aef"))
# print(gcd_string("abc", "defg"))
# print(gcd_string("abc", "defabc"))
