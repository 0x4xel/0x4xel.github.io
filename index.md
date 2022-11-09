
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

