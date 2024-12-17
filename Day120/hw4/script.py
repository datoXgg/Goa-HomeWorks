def count_blanks_tabs_newlines():
    blanks = tabs = newlines = 0
    try:
        while True:
            ch = input() + '\n'
            for c in ch:
                if c == ' ':
                    blanks += 1
                elif c == '\t':
                    tabs += 1
                elif c == '\n':
                    newlines += 1
    except EOFError:
        pass
    print(f"Blanks: {blanks}, Tabs: {tabs}, Newlines: {newlines}")

count_blanks_tabs_newlines()


def replace_multiple_blanks():
    try:
        while True:
            line = input() + '\n'
            result = ' '.join(line.split())
            print(result)
    except EOFError:
        pass

replace_multiple_blanks()


def replace_special_chars():
    try:
        while True:
            line = input() + '\n'
            result = line.replace('\t', '\\t').replace('\b', '\\b').replace('\\', '\\\\')
            print(result)
    except EOFError:
        pass

replace_special_chars()
