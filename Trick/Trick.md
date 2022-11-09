
---
fileClass: Machine
---

<p align="center"> <img src= "https://www.hackthebox.com//storage/avatars/ca56ef43d636aff7da48a8b484756cfe.png"> </p>

#machine

## Operation system - Linux
<img style = "max-width:70px" src = "app://local//home/axel/Escritorio/HTNotes/HTB//.res/linux.png">

## Metadata

|                       |   |
| ----------------      | - |
| ID                    |477 |
| Name                  |Trick |
| Active                |✅  |
| User Flag             |✅ |
| Root Flag             |✅|
| Difficulty Text       |Easy  |
| Stars                 |⭐️ 4.1 |
| Created Note          |2022/11/09 |
| Published             |2022/06/18 |
| tags                  | |

<p style ="display:none">
id:: 477
active:: True
name:: Trick
os::Linux
user_flag:: True
root_flag:: True
difficulty_text:: Easy
stars:: 4.1
created:: 2022/11/09
published:: 2022/06/18
avatar:: /storage/avatars/ca56ef43d636aff7da48a8b484756cfe.png
tags:: 
</p>

## Statistics


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
    score: 6.7
  - item: "REAL"
    user: "user"
    score: 5
  - item: "CVE"
    user: "user"
    score: 5
  - item: "CUSTOM"
    user: "user"
    score: 5
  - item: "CTF"
    user: "user"
    score: 5
  - item: "ENUM"
    user: "author"
    score: 10
  - item: "REAL"
    user: "author"
    score: 10
  - item: "CVE"
    user: "author"
    score: 10
  - item: "CUSTOM"
    user: "author"
    score: 0
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
      count: 240
     
    - folder: "VERY EASY"
      count: 399

    - folder: "EASY"
      count: 1310
      
    - folder: "NOT TO EASY"
      count: 2022
      
    - folder: "MEDIUM"
      count: 2000
     
    - folder: "A BIT HARD"
      count: 808
      
    - folder: "HARD"
      count: 493
      
    - folder: "EXTREMELY HARD"
      count: 148
      
    - folder: "INSANE"
      count: 50
      
    - folder: "BRAINFUCK"
      count: 81

    

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



```button
name Update this Machine info
type link
action obsidian://shell-commands/?vault=HTB&execute=g7sm2q030y
templater true
```

