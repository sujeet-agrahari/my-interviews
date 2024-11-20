def merge_strings_alternate(str1, str2):
    result = ""
    for i in range(max(len(str1), len(str2))):
        if i < len(str1):
            result += str1[i]
        if i < len(str2):
            result += str2[i]
    return result


print(merge_strings_alternate("abc", "def"))
print(merge_strings_alternate("abc", "defg"))
