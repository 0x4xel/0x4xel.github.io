
*Your vault have the following machines

## Machines

```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

dv.table(['Name', 'Avatar','Difficulty','User Flag', 'Root Flag','Stars', 'OS'],
	dv.pages("#machine")
		.filter(p => p.file.path.includes("Machine"))
		.filter(p => !p.file.path.includes("fileClass"))
		.filter(p => !p.file.path.includes("templates"))
		.map(p => [
		p.file.link,
		'<img style="max-width:70px" src="https://www.hackthebox.com/'+p.avatar+'">',
		
		f(dv,p,"difficulty_text"),
		
		f(dv,p,"user_flag"),
		f(dv,p,"root_flag"),
		f(dv,p,"stars"),
		f(dv,p,"os")
	
		]).sort(b => b.created )
		)
```



## Machines in vault with USER but not ROOT

```dataviewjs
const {fieldModifier: f} = this.app.plugins.plugins["metadata-menu"].api;

dv.table(['Name', 'Avatar','Difficulty','User Flag', 'Root Flag','Stars', 'OS'],
	dv.pages("#machine")
		.filter(p => p.file.path.includes("Machine"))
		.filter(p => !p.file.path.includes("fileClass"))
		.filter(p => !p.file.path.includes("templates"))
		.filter(p => !p.root_flag)
		.map(p => [
		p.file.link,
		'<img style="max-width:70px" src="https://www.hackthebox.com/'+p.avatar+'">',
		
		f(dv,p,"difficulty_text"),
		
		f(dv,p,"user_flag"),
		f(dv,p,"root_flag"),
		f(dv,p,"stars"),
		f(dv,p,"os")
	
		]).sort(b => b.created )
		)
```


<table class="dataview table-view-table"><thead class="table-view-thead"><tr class="table-view-tr-header"><th class="table-view-th"><span>Name</span><span class="dataview small-text">5</span></th><th class="table-view-th"><span>Avatar</span></th><th class="table-view-th"><span>Difficulty</span></th><th class="table-view-th"><span>User Flag</span></th><th class="table-view-th"><span>Root Flag</span></th><th class="table-view-th"><span>Stars</span></th><th class="table-view-th"><span>OS</span></th></tr></thead><tbody class="table-view-tbody"><tr><td><span><a aria-label-position="top" aria-label="Machines/Trick/Trick.md" data-href="Machines/Trick/Trick.md" href="Machines/Trick/Trick.md" class="internal-link" target="_blank" rel="noopener" fileclass-name="Machine">Trick</a><a class="fileclass-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></a></span></td><td><span><img src="https://www.hackthebox.com//storage/avatars/ca56ef43d636aff7da48a8b484756cfe.png" style="max-width:70px" referrerpolicy="no-referrer"></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Easy</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><button class="metadata-menu-dv-field-button" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button><span><span>4.1</span></span><div class="metadata-menu-dv-field-spacer"></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Linux</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td></tr><tr><td><span><a aria-label-position="top" aria-label="Machines/Shared/Shared.md" data-href="Machines/Shared/Shared.md" href="Machines/Shared/Shared.md" class="internal-link" target="_blank" rel="noopener" fileclass-name="Machine">Shared</a><a class="fileclass-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></a></span></td><td><span><img src="https://www.hackthebox.com//storage/avatars/bf928375e067672d42a572d81684537b.png" style="max-width:70px" referrerpolicy="no-referrer"></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Medium</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><button class="metadata-menu-dv-field-button" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button><span><span>4.7</span></span><div class="metadata-menu-dv-field-spacer"></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Linux</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td></tr><tr><td><span><a aria-label-position="top" aria-label="Machines/Phoenix/Phoenix.md" data-href="Machines/Phoenix/Phoenix.md" href="Machines/Phoenix/Phoenix.md" class="internal-link" target="_blank" rel="noopener" fileclass-name="Machine">Phoenix</a><a class="fileclass-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></a></span></td><td><span><img src="https://www.hackthebox.com//storage/avatars/4cb627c0950fdfa2e44c9d0257941e6c.png" style="max-width:70px" referrerpolicy="no-referrer"></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Hard</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><button class="metadata-menu-dv-field-button" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button><span><span>3</span></span><div class="metadata-menu-dv-field-spacer"></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Linux</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td></tr><tr><td><span><a aria-label-position="top" aria-label="Machines/MetaTwo/MetaTwo.md" data-href="Machines/MetaTwo/MetaTwo.md" href="Machines/MetaTwo/MetaTwo.md" class="internal-link" target="_blank" rel="noopener" fileclass-name="Machine">MetaTwo</a><a class="fileclass-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></a></span></td><td><span><img src="https://www.hackthebox.com//storage/avatars/b08c77f48a671ddc1947d8570b75f6e6.png" style="max-width:70px" referrerpolicy="no-referrer"></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Easy</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><button class="metadata-menu-dv-field-button" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button><span><span>4.7</span></span><div class="metadata-menu-dv-field-spacer"></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Linux</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td></tr><tr><td><span><a aria-label-position="top" aria-label="Machines/Lame/Lame.md" data-href="Machines/Lame/Lame.md" href="Machines/Lame/Lame.md" class="internal-link" target="_blank" rel="noopener" fileclass-name="Machine">Lame</a><a class="fileclass-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg></a></span></td><td><span><img src="https://www.hackthebox.com//storage/avatars/fb2d9f98400e3c802a0d7145e125c4ff.png" style="max-width:70px" referrerpolicy="no-referrer"></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Easy</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><input type="checkbox"></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><button class="metadata-menu-dv-field-button" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button><span><span>4.5</span></span><div class="metadata-menu-dv-field-spacer"></div></div></span></td><td><span><div class="metadata-menu-dv-field-container"><span></span><div><span><span>Linux</span></span><button class="metadata-menu-dv-field-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></button></div></div></span></td></tr></tbody></table>

```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Radar

#-----------------#
#- chart data    -#
#-----------------#
data:
  - item: "ENUM"
    user: "user"
    score: 7.2
  - item: "REAL"
    user: "user"
    score: 5.8
  - item: "CVE"
    user: "user"
    score: 5.6
  - item: "CUSTOM"
    user: "user"
    score: 4.4
  - item: "CTF"
    user: "user"
    score: 4.2
  - item: "ENUM"
    user: "author"
    score: 10
  - item: "REAL"
    user: "author"
    score: 10
  - item: "CVE"
    user: "author"
    score: 5
  - item: "CUSTOM"
    user: "author"
    score: 5
  - item: "CTF"
    user: "author"
    score: 0

#-----------------#
#- chart options -#
#-----------------#
options:
  xField: "item"
  yField: "score"
  seriesField: "user"
  meta:
    score:
      alias: "Score"
      min: 0
      nice: true
  xAxis:
    line: null
    tickLine: null
  yAxis:
    label: false
    grid:
      alternateColor: "rgba(0, 0, 0, 0.04)"
  point: []
  area: []
```



### User rating


```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Column

#-----------------#
#- chart data    -#
#-----------------#
data:
    - folder: "PIECE OF CAKE"
      count: 22
     
    - folder: "VERY EASY"
      count: 11

    - folder: "EASY"
      count: 21
      
    - folder: "NOT TO EASY"
      count: 43
      
    - folder: "MEDIUM"
      count: 146
     
    - folder: "A BIT HARD"
      count: 89
      
    - folder: "HARD"
      count: 148
      
    - folder: "EXTREMELY HARD"
      count: 69
      
    - folder: "INSANE"
      count: 21
      
    - folder: "BRAINFUCK"
      count: 24

    

#-----------------#
#- chart options -#
#-----------------#
options:
  xField: "folder"
  yField: "count"
  padding: auto
  label:
    position: "middle"
    style:
      opacity: 0.6
      fontSize: 12
  columnStyle:
    fillOpacity: 0.5
    lineWidth: 1
    strokeOpacity: 0.7
    shadowColor: "grey"
    shadowBlur: 10
    shadowOffsetX: 5
    shadowOffsetY: 5
  xAxis:
    label:
      autoHide: false
      autoRotate: true
  meta:
    count:
      alias: "Votes"
```

