(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{77792:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/article/snap-console",function(){return t(69456)}])},48346:function(e,n,t){"use strict";var o=t(85893),r=t(47322),a=t(50396),s=t(83433),i=t(18532),l=t(98683),c=t(84283),p=t(45146),h=t(98279),d=t(25675),u=t.n(d),g=t(39112),f=t.n(g);let w=c.Ro,m=f().codeBgColor,y=c.Ro['code[class*="language-"]'].fontFamily,_={...w,':not(pre) > code[class*="language-"]':{...w[':not(pre) > code[class*="language-"]'],background:m},'code[class*="language-"]':{...w['code[class*="language-"]'],background:m},'pre[class*="language-"]':{...w['pre[class*="language-"]'],background:m}};function b(e){return(0,o.jsx)("div",{className:f().markdown,children:(0,o.jsx)(i.D,{rehypePlugins:[p.Z],components:{code(e){let{node:n,inline:t,className:r,children:a,...s}=e,i=/language-(\w+)/.exec(r||"");return!t&&i?(0,o.jsx)(l.Z,{style:_,language:i[1],PreTag:"div",...s,children:String(a).replace(/\n$/,"")}):(0,o.jsx)("code",{className:r,...s,children:a})}},children:e})})}n.Z=e=>{let{siteHeadProps:n,headerBg:t,articleMarkdown:i}=e,[l,c]=function(e){let n=RegExp("<header>.*<\\/header>","s");return[(e.match(n)||[""])[0],e.replace(n,"")]}(i);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{...n}),(0,o.jsx)(r.Z,{footerContent:"Designed and built from scratch by ".concat(h.Rh," with NextJS and SCSS!"),header:(0,o.jsxs)("div",{className:f().headerContainer,children:[(0,o.jsx)(u(),{className:f().headerBackground,src:t,alt:"",priority:!0,fill:!0}),(0,o.jsx)("div",{className:f().headerContent,children:b(l)})]}),children:(0,o.jsx)(a.Z,{children:(0,o.jsx)("div",{className:f().article,style:{"--code-font-family":y},children:b(c)})})})]})}},13601:function(e,n,t){"use strict";t.d(n,{w:function(){return a}});var o=t(98279);function r(e){return new URL(e,o.Tu).toString()}let a={INTRODUCTION_TO_DOMSI:{title:"Introduction to Domsi",href:"/article/introduction-to-domsi/",headerBg:"/article/introduction-to-domsi/banner.webp",sitePreview:{img:{src:r("/article/introduction-to-domsi/thumbnail.png"),type:"image/png",width:600,height:400},description:"A powerful and blazingly fast web scraping library that integrates element styles, attributes, and DOM hierarchy in its selectors."},card:{title:"Domsi",description:"A powerful and blazingly fast web scraping library that integrates element styles, attributes, and DOM hierarchy in its selectors.",thumbnailSrc:"/article/introduction-to-domsi/thumbnail.webp",tags:["Web scraping","Typescript","NPM","Open Source","Algorithm"]}},MURDER_MYSTERY_GAME:{title:"Murder Mystery Game",href:"/article/murder-mystery-game/",headerBg:"/article/murder-mystery-game/banner.webp",sitePreview:{img:{src:r("/article/murder-mystery-game/thumbnail.png"),type:"image/png",width:600,height:400},description:"The game engine for a Victorian Murder Mystery game I designed for an online event."},card:{title:"Murder Mystery Game",thumbnailSrc:"/article/murder-mystery-game/thumbnail.webp",description:"I created a game engine for a Murder Mystery event! Learn how I used encryption concepts to obfuscate game data from prying players.",tags:["Game Engine","React","SCSS","Typescript","Cryptography","Webpack Loader"]}},FOCUS_SHEPHERD:{title:"Focus Shepherd",href:"/article/focus-shepherd/",headerBg:"/article/focus-shepherd/banner.webp",sitePreview:{description:"Focus Shepherd is a TamperMonkey / GreaseMonkey script that gently reminds you to focus when you get distracted on your web browser!",img:{src:r("/article/focus-shepherd/thumbnail.png"),type:"image/png",width:600,height:400}},card:{title:"Focus Shepherd",thumbnailSrc:"/article/focus-shepherd/thumbnail.webp",description:"Focus Shepherd is a TamperMonkey / GreaseMonkey script that gently reminds you to focus when you get distracted on your web browser!",tags:["TamperMonkey / GreaseMonkey","HTML","Javascript","Productivity"]}},EXPLORING_EPICYCLES:{title:"Exploring Epicycles",href:"/article/exploring-epicycles/",headerBg:"/article/exploring-epicycles/banner.webp",sitePreview:{description:"Come with me on the journey to explore the Fourier transform, and how we can use that to compute epicycles.",img:{src:r("/article/exploring-epicycles/thumbnail.png"),type:"image/png",width:600,height:400}},card:{title:"Epicycles",thumbnailSrc:"/article/exploring-epicycles/thumbnail.webp",description:"Image processing with the Fast Fourier Transform to create an animated illustration of epicycles.",tags:["Python","Mathematics","Numpy","Python Imaging Library (PILLOW)","FFMPEG"]}},SNAP_CONSOLE:{title:"Snap Console",href:"/article/snap-console/",headerBg:"/article/snap-console/banner.webp",sitePreview:{img:{src:r("/article/snap-console/thumbnail.png"),type:"image/png",width:600,height:400},description:"A easy-to-use console library in Python to display beautiful outputs."},card:{title:"Snap Console",thumbnailSrc:"/article/snap-console/thumbnail.webp",description:"A easy-to-use console library in Python to display beautiful outputs. Implemented with the curses library.",tags:["Python","Open Source","PIP","Curses Terminal Library"]}},SHARD_GAME_ENGINE:{title:"Shard Game Engine",href:"/article/shard-game-engine/",headerBg:"/article/shard-game-engine/banner.webp",sitePreview:{img:{src:r("/article/shard-game-engine/thumbnail.png"),type:"image/png",width:600,height:400},description:"A text-based game engine with a unique story structure. The engine allows users to create custom stories too."},card:{title:"Shard Game Engine",thumbnailSrc:"/article/shard-game-engine/thumbnail.webp",description:"A text-based game engine with a unique story structure. The engine allows users to create custom stories too.",tags:["Game Engine","SCSS","Typescript","Parcel.js"]}}}},69456:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(85893),r=t(48346);let a=t(13601).w.SNAP_CONSOLE;function s(){var e;return(0,o.jsx)(r.Z,{siteHeadProps:{title:a.title,description:a.sitePreview.description,image:a.sitePreview.img,twitterImageSrc:null===(e=a.sitePreview.img)||void 0===e?void 0:e.src},articleMarkdown:"<header>\n\n<h1>Snap Console</h1>\n\n<p>Making a powerful console library with Python descriptors, context, and the curses library; all because of a game</p>\n\n<p><a href=\"https://github.com/Kenneth-LJS/snap-console\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub</a> | <a href=\"https://pypi.org/project/snap-console/\" target=\"_blank\" rel=\"noopener noreferrer\">PyPI</a></p>\n\n</header>\n\n## Raids and Notepad\n\nAs an avid RuneScape player, I attend the Warband raids event that regularly happens. Multiple camps spawn on different worlds, each with their own resources. Players have to loot the resources before the camps despawn.\n\nI have a clan that does the raids. We station people across different worlds to locate and call out the camps. To optimise the calls, we use acronyms.\n\n- “12 dwf” means that a camp on world 12 has spawned at the Dark Warrior Fortress.\n    - There are 3 possible spawn locations: Dark Warrior Fortress (DWF), East Lava Maze (ELM), and Red Dragon Isle (RDI).\n- “86 msf” means that the resources on the world 86 camp are Mining, Smithing, and Farming.\n    - Camps spawn with 3 of 5 resources: Construction, Farming, Herblore, Mining, and Smithing.\n- “104 looting” means that the camp on world 104 is ready to be looted.\n   - Camps need to be cleared before looting.\n- “49 broken\" means that the camp on world 49 is broken.\n   - Broken camps are camps that have failed to clear and cannot be looted.\n- “19 8m” means that the camp on world 19 has 8 minutes of time left before despawning.\n\nAs the tracker, I keep track of the camps: the world, location, resources, and despawn time. To do that, I have my friend Notepad.exe.\n\n<p align=center>\n  <img src=\"./static/notepad.png\" style=\"width: min(100%, 300px)\">\n</p>\n\nNot an ideal solution. I end up with duplicate worlds, scattered information (e.g. “15 dwf” on one line, and “15 msf” on another line), and I can’t even keep track of despawn times.\n\nI turned to Python for help.\n\n## Python\nIn the first version of my raid tracker, I basically took all the inputs and sorted them by the world number.\n\n```python\nworld_calls = []\n\nwhile True:\n    user_input = input('Input: ')\n    if user_input == 'exit':\n        break\n\n    world_calls.append(user_input)\n    world_calls.sort(key=lambda input: int(input.split(' ')[0]))\n    for world_call in world_calls:\n        print(world_call)\n    print()\n```\n\nPrimitive, but it works.\n\n```shell\nInput: 10 dwf\n10 dwf\n\nInput: 42 rdi\n10 dwf\n42 rdi\n\nInput: 10 msf\n10 dwf\n10 msf\n42 rdi\n```\n\nWith the world calls in order, it’s slightly easier to see calls organised by worlds.\n\nBut we can do better than this. After this, I added checks to combine the camp location, resources, and state.\n\n```shell\nInput: 10 dwf\n10 dwf\n\nInput: 42 rdi\n10 dwf\n42 rdi\n\nInput: 10 msf\n10 dwf msf\n42 rdi\n\n# The earlier call of 10 dwf was incorrect\n# so we update its location to elm\nInput: 10 elm\n10 elm msf\n42 rdi\n```\n\nBetter, but there’s a final feature that the vanilla Python console cannot solve. I want to track the camp despawn times. If I type “10 8m”, I want the script to show an 8-minute countdown timer beside the world. We can’t do that here because:\n\n1. The `input()` function is blocking, and nothing new can be printed until I enter something in the console.\n2. Even if we used an asynchronous coroutine to do the printing, the world list will have to be reprinted every second to update the time, leading to a lot of flashing in the console.\n\nHow do we fix this?\n\n## Print()\nLet’s try to create a console that prints an incremental counter while echoing user input. First, we need an async function to handle the printing.\n\n```python\nasync def console_counter():\n    counter = 1\n    while True:\n        await asyncio.sleep(1)\n        print(f'Counter: {counter}')\n        counter += 1\n```\n\nThen we set up the script to run the coroutine asynchronously.\n\n```python\nimport asyncio\n\nasync def main():\n    asyncio.create_task(console_counter())\n\n    # We'll take user input here\n    \n    await asyncio.sleep(10)\n\nasyncio.run(main())\n```\n\n<p align=center>\n  <video src=\"./static/counter.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nThe display counts from 1 to 9, then the program terminates once the 10-second sleep has run out. Now, let’s take user input and echo it back to the user.\n\n```python\nasync def main():\n    asyncio.create_task(console_counter())\n\n    print('Type anything and press \"Enter\"')\n    while True:\n        user_input = input()\n        if len(user_input) == 0:\n            exit()\n\n        print('ECHO: ' + user_input)\n```\n\nLet’s check the printout.\n\n<p align=center>\n  <video src=\"./static/counter-input.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nHuh. The console counter doesn’t print the counts. It turns out that `input` is a blocking function, which means other coroutines cannot run while we are waiting for user input. To make this work, we have to use threads.\n\n```python\nimport threading\nimport time\n\ndef console_counter():\n    counter = 1\n    while True:\n        time.sleep(1)\n        print(f'Counter: {counter}')\n        counter += 1\n\nconsole_counter_thread = threading.Thread(\n    target=console_counter,\n    daemon=True\n)\nconsole_counter_thread.start()\n\nprint('Type anything and press \"Enter\"')\nwhile True:\n    user_input = input()\n    if len(user_input) == 0:\n        exit()\n\n    print('ECHO: ' + user_input)\n```\n\n<p align=center>\n  <video src=\"./static/counter-threading-1.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nThe two threads are trying to print over each other, causing the display issue we’re seeing in the demo. We can do a little hack by playing around with control characters.\n\n- Printing `\\r` brings the cursor to the start of the current row.\n- Printing `\\033[F` brings the cursor to the start of the previous row.\n- Printing `\\03[{n}G` moves the cursor `n` characters to the right.\n- Printing `\\x1b[2K` clears the current line, but keeps the cursor in the same location.\n\n```python\nSTART_OF_LINE = '\\r'\nLINE_UP = '\\033[A'\nLINE_CLEAR = '\\x1b[2K'\n\nprint('Hello')\nprint('World!', end='')\n\n'''\nHello\nWorld!\n'''\n\n# Returns the cursor to start of row\nprint(START_OF_LINE, end='')\n\n# Moves the cursor forward 2 characters\nprint('\\033[3G', end='')\n\n# Prints the characters `lf!` over `ord` that was\n# previously printed at that position.\nprint('lf!', end='')\n\n'''\nHello\nWolf!!\n'''\n\n# Move to the first row\nprint(LINE_UP, end='')\n\n'''\nHello\nWolf!!\n'''\n\n# Clears the first row. The cursor is still at the\n# 5th position on the first line.\nprint(LINE_CLEAR, end='')\n\n# Prints \"Hi\" on the 5th position\nprint('Hi', end='')\n\n'''\n    Hi\nWolf!!\n'''\n```\n\nIf we apply these concepts to the previous script, we can achieve something like this:\n\n```python\nimport threading\nimport time\n\ndef console_counter():\n    counter = 1\n\n    while True:\n        time.sleep(1)\n\n        # Go to the start of the current line\n        print('\\r', end='')\n\n        # Print the counter and move down 1 line\n        print(f'Counter: {counter}')\n\n        counter += 1\n\n\nconsole_counter_thread = threading.Thread(target=console_counter, daemon=True)\nconsole_counter_thread.start()\n\nprint('Type anything and press \"Enter\"')\n\nwhile True:\n    user_input = input()\n    if len(user_input) == 0:\n        exit()\n\n    print('ECHO: ' + user_input)\n```\n\n<p align=center>\n  <video src=\"./static/counter-threading-2.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nUh… no.\n\n## Curses Library\n\nWhile researching a less-janky solution, I stumbled across the “curses” library. curses handles screen-painting and keyboard-handling across various text-based terminals, be it VT100s, the Linux console, or other simulated terminals. Thankfully, there is also a Python wrapper for this module, which I quickly installed.\n\n```shell\n> pip install windows-curses\n```\n\n(Sorry, Mac and Unix users, it only works on Windows \uD83D\uDE1B)\n\nAfter some experimentation, it turns out that the curses library is very low-level. For instance, this is how you’d print “Hello World”.\n\n```python\nfrom curses import wrapper\n\ndef main(stdscr):\n    # Clear the screen\n    stdscr.clear()\n\n    # Print \"Hello world!\" as the coordinates (7, 5)\n    stdscr.addstr(7, 5, 'Hello world!')\n\n    # Ensures that the screen has been redrawn\n    stdscr.refresh()\n    \n    # Wait for user input before exiting\n    stdscr.getkey()\n\nwrapper(main)\n```\n\nIt also exposes a lot of low-level functionality that lets you take greater control of the console. For instance, you can refresh a specific portion of the screen if only that part has been changed. You can also define new areas called “pads” that can be rendered separately, then displayed on the screen. In short, you can optimise the display process for faster printing and less flashing.\n\nBut printing to the console on such a granular level is tedious. If I implemented my raid tracker with curses, at least 90% of my code will be handling the printing and updating of the console.\n\nSo I did what any reasonable developer would do: spend hundreds of hours building a new console library.\n\n## Snap Console\nPresenting the Snap Console. I wanted a library that would be easy to put together in a snap, hence the name.\n\nHere are the features I wanted:\n\n- Handle inputs and printing concurrently.\n- More control over the order of printed lines.\n\nWhat if I could modify the console output as if it were a list of rows? Something like this:\n\n```python\nconsole.logs.append('Row 1')\nconsole.logs.append('Row 2')\nconsole.logs += ['Row 3', 'Row 4']\nconsole.logs.pop()\n```\n\nTo do this, I needed to wrap a list so that when you modify it, we can trigger a callback. Thankfully, Python gives us a lot of power to override operators on your classes. For instance, we can use `__iadd__` to define how the `+` operator works on `WrappedList`s.\n\n```python\nclass WrappedList(list):\n    \"\"\"Creates a list that calls a callback function on edit\"\"\"\n\n    def __init__(self, callback, *args, **kwargs):\n        super().__init__(*args, **kwargs)\n        self.callback = callback\n\n    def append(self, *args, **kwargs):\n        result = super().append(*args, **kwargs)\n        self.callback()\n        return result\n\n    def __iadd__(self, *args, **kwargs):\n        result = super().__iadd__(*args, **kwargs)\n        self.callback()\n        return result\n\n    # ... Other operations\n```\n\nWe can then add it to the `SnapConsole` class.\n\n```python\nclass SnapConsole:    \n    def __init__(self):\n        self.logs = WrappedList(self.refresh, [])\n\n    def refresh(self):\n        # Placeholder function\n        print('Update:', self.logs)\n```\n\nNow we can do:\n\n```python\nconsole = SnapConsole()\nconsole.logs.append('Log 1')\nconsole.logs.append('Log 2')\nconsole.logs += ['Log 3', 'Log 4']\nprint(console.logs)\n```\n\nThe output:\n\n```shell\nUpdate: ['Log 1']\nUpdate: ['Log 1', 'Log 2']\nUpdate: ['Log 1', 'Log 2', 'Log 3', 'Log 4']\n```\n\nThis looks good so far. Each time we update the `logs` property, we can trigger a print callback. Let’s play around more.\n\n```python\nconsole.logs.append('Log 1')\nconsole.logs.append('Log 2')\nconsole.logs = ['Log 3', 'Log 4']\nconsole.logs.append('Log 5')\n```\n\nThe output:\n\n```shell\nUpdate: ['Log 1']\nUpdate: ['Log 1', 'Log 2']\n```\n\nHuh, what happened here? It turns out that when we ran `console.logs = ['Log 3', 'Log 4']`, we replaced `console.logs` with a regular list rather than a wrapped one. This means that mutations from that point onwards do not update the screen. We could force users to do something like this:\n\n```python\nconsole.logs = WrappedList(console.refresh, ['Log 3', 'Log 4'])\n```\n\nIt works, but that’s really inelegant. Users are bound to forget to add the wrapper, leading to weird bugs throughout their code. Can we do better?\n\n### Python Descriptors\n\nAgain, Python comes to the rescue. We can define a descriptor to manage the `logs` attribute.\n\n```python\n    class WrappedListDescriptor:\n        def __init__(self, callback_name):\n            # We save the name of the callback function for later access\n            self.callback_name = callback_name\n\n        def __set_name__(self, owner, name):\n            # We store the `logs` variable as `_logs`.\n            # This way, `logs` can be used as a property.\n            self.private_name = '_' + name\n\n        def __get__(self, instance, owner):\n            # When accessing the `logs` property, return the private\n            # `_logs` value if it is defined, otherwise initializes\n            # an empty WrappedList\n            cur_lst = getattr(instance, self.private_name, None)\n            if cur_lst is None:\n                callback = getattr(instance, self.callback_name, lambda: None)\n                new_lst = WrappedList(callback, [])\n                setattr(instance, self.private_name, new_lst)\n                return new_lst\n            return cur_lst\n\n        def __set__(self, instance, new_lst):\n            # Updates the `_logs` value with a wrapped version of the list\n\n            cur_lst = getattr(instance, self.private_name, None)\n            callback = getattr(instance, self.callback_name, lambda: None)\n            if new_lst is not cur_lst:\n                setattr(instance, self.private_name, WrappedList(callback, new_lst))\n            callback()\n\n        def __delete__(self, instance):\n            # Do not allow the user to delete the `logs` attribute from the console\n            raise AttributeError\n```\n\nI won’t go into detail of how it works, so if you’d like to learn more, check out <a href=\"https://docs.python.org/3/howto/descriptor.html\" target=\"_blank\" rel=\"noopener noreferrer\">Python Descriptors</a>. Now, we can use it in SnapConsole.\n\n```python\nclass SnapConsole:\n    logs = WrappedListDescriptor('refresh')\n\n    def __init__(self):\n        self.logs = []\n\n    def refresh(self):\n        # Placeholder function\n        print('Update:', self.logs)\n```\n\nWe don’t even have to wrap the list in `__init__` because the descriptor does it for us! Now, when we run the following:\n\n```python\nconsole.logs.append('Log 1')\nconsole.logs.append('Log 2')\nconsole.logs = ['Log 3', 'Log 4']\nconsole.logs.append('Log 5')\n```\n\nWe get this:\n\n```shell\nUpdate: []\nUpdate: ['Log 1']\nUpdate: ['Log 1', 'Log 2']\nUpdate: ['Log 3', 'Log 4']\nUpdate: ['Log 3', 'Log 4', 'Log 5']\n```\n\nSweet!\n\n### Python Context\nBut we’re not done yet! It turns out that the curses library needs to be initialised with `curses.initscr()` and terminated with `curses.endwin()`. I’ve implemented `SnapConsole.start()` and `SnapConsole.stop()`, but what if the user forgets to call `stop()`?\n\nFor instance, take the following code:\n\n```python\ntry:\n    console = SnapConsole()\n    console.start()\n    # Do stuff\n    console.stop()\nexcept:\n    pass\n```\n\nIf an exception is thrown, we will exit the `try` block without closing the console! This happens way more often than we’d like to admit. Instead, can we do something like how `open` works?\n\n```python\nwith open('filename.txt') as f:\n    f.read()\n```\n\nPython once again comes to the rescue. By defining `__enter__` and `__exit__` functions, we can achieve the same functionality.\n\n```python\nclass SnapConsole:\n\n    def __enter__(self):\n        self.start()\n        return self\n\n    def __exit__(self, type, value, traceback):\n        self.stop()\n    \n    # ... other functions\n```\n\nNow, we can simply start up SnapConsole like this:\n\n```python\nwith SnapConsole() as console:\n    console.logs = ['Success!']\n```\n\nAnd Python does all the work of closing the console for us. We’re left with defining the `refresh()` function. There’s a lot of nitty-gritty details to make it work, so I won’t go into it here.\n\nBut after hours of coding and debugging, we’re done! Let’s put it all together to create our counter script.\n\n```python\nimport asyncio\nfrom snapconsole import SnapConsole\n\nasync def console_counter(console):\n    counter = 1\n    while True:\n        await asyncio.sleep(1)\n        console.logs.append(f'Counter: {counter}')\n        counter += 1\n\nasync def main():\n    with SnapConsole() as console:\n        asyncio.create_task(console_counter(console))\n\n        async for user_input in console:\n            if len(user_input) == 0:\n                break\n            console.logs.append(f'ECHO: {user_input}')\n\nasyncio.run(main())\n```\n\nAnd now to test it out…\n\n<p align=center>\n  <video src=\"./static/counter-snap-console.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nPhew! Everything works as expected.\n\nI could go into everything I did for the Snap Console (colours, styles, headers, and more!), but this article is long enough. If you’d like to find out more about the features, check out the <a href=\"https://github.com/Kenneth-LJS/snap-console\" target=\"_blank\" rel=\"noopener noreferrer\">documentation</a>.\n\nIn the meantime, though, it’s time to get back to the raids.\n\n## Raids and Snap Console\n\nWith the Snap Console library done, I rewrote the raids tracker. Here’s the main logic:\n\n```python\nimport asyncio\nfrom snapconsole import SnapConsole, LogsAlignPosition, TextboxAlignPosition\n\ndef update_world_list(world_list, user_input):\n    '''\n        Insert logic to parse the user_input and\n        update the world list with the changes\n    '''\n    return world_list\n\nasync def main():\n    world_list = []\n\n    with SnapConsole(\n        textbox_align_position = TextboxAlignPosition.TOP,\n        logs_align_position = LogsAlignPosition.TOP,\n    ) as console:\n\n        def refresh_worlds():\n            console.logs = [str(world) for world in world_list]\n\n        async def refresh_worlds_task():\n            while True:\n                refresh_worlds()\n                await asyncio.sleep(1)\n        refresh_task = asyncio.create_task(refresh_worlds_task())\n\n        refresh_worlds()\n\n        async for user_input in console:\n            if user_input == 'exit':\n                break\n\n            world_list = update_world_list(world_list, user_input)\n            refresh_worlds()\n\n        refresh_task.cancel()\n\nasyncio.run(main())\n```\n\nCoding this was surprisingly easier than expected. Let’s check if it works…\n\n<p align=center>\n  <video src=\"./static/raids-tracker.mp4\" style=\"width: min(100%, 800px)\" preload=\"auto\" muted autoplay loop playsinline data-wf-ignore=\"true\" data-object-fit=\"cover\">\n</p>\n\nAnd it does! No hacky print statements and messy outputs: everything looks perfect. That’s what you get when you have an all-powerful console library to handle things for you.\n\nYou can install Snap Console on PyPI <a href=\"https://pypi.org/project/snap-console/\" target=\"_blank\" rel=\"noopener noreferrer\">here</a> and start using it now! Otherwise, if you’d like to check out the open-source repository, you can find it <a href=\"https://github.com/Kenneth-LJS/snap-console\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.",headerBg:a.headerBg})}},39112:function(e){e.exports={baseFs:"18px",baseColor:"#1f2834",primaryColor:"#eee",secondaryColor:"#11d0da",codeBgColor:"#12171e",headerContainer:"page_headerContainer__nIT86",headerBackground:"page_headerBackground__ZhJMg",headerContent:"page_headerContent__zKG4K",markdown:"page_markdown__VQ6gW"}}},function(e){e.O(0,[396,187,957,888,774,179],function(){return e(e.s=77792)}),_N_E=e.O()}]);