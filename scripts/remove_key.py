import re
import sys

path = r'D:\SOC (F)\Yalla-Hack Project\Departments\HR\Audit and legal compliance\Company registeration in China\Guangzhou\Yalla Kaishi\Yalla-Kaishi-Website\src\i18n\ui-pages.ts'
with open(path, 'r', encoding='utf8') as f:
    c = f.read()

pattern = r"'about.storyTitle':\s*\{[^}]+\},\s*"
before = c.count('about.storyTitle')

if before > 0:
    c = re.sub(pattern, '', c)
    with open(path, 'w', encoding='utf8') as f:
        f.write(c)
    print('Removed', before, 'occurrences of about.storyTitle')
else:
    print('Key not found, count:', before)