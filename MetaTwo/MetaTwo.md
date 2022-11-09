
---
fileClass: Machine
---

<p align="center"> <img src= "https://www.hackthebox.com//storage/avatars/b08c77f48a671ddc1947d8570b75f6e6.png"> </p>

#machine

## Operation system - Linux
<img style = "max-width:70px" src = "app://local//home/axel/Escritorio/HTNotes/HTB//.res/linux.png">

## Metadata

|                       |   |
| ----------------      | - |
| ID                    |504 |
| Name                  |MetaTwo |
| Active                |✅  |
| User Flag             |✅ |
| Root Flag             |✅|
| Difficulty Text       |Easy  |
| Stars                 |⭐️ 4.7 |
| Created Note          |2022/11/09 |
| Published             |2022/10/29 |
| tags                  | |

<p style ="display:none">
id:: 504
active:: True
name:: MetaTwo
os::Linux
user_flag:: True
root_flag:: True
difficulty_text:: Easy
stars:: 4.7
created:: 2022/11/09
published:: 2022/10/29
avatar:: /storage/avatars/b08c77f48a671ddc1947d8570b75f6e6.png
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
    score: 5.4
  - item: "REAL"
    user: "user"
    score: 5.5
  - item: "CVE"
    user: "user"
    score: 5.8
  - item: "CUSTOM"
    user: "user"
    score: 4.2
  - item: "CTF"
    user: "user"
    score: 4.5
  - item: "ENUM"
    user: "author"
    score: 7
  - item: "REAL"
    user: "author"
    score: 7
  - item: "CVE"
    user: "author"
    score: 7
  - item: "CUSTOM"
    user: "author"
    score: 3
  - item: "CTF"
    user: "author"
    score: 3

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
      count: 39
     
    - folder: "VERY EASY"
      count: 58

    - folder: "EASY"
      count: 175
      
    - folder: "NOT TO EASY"
      count: 250
      
    - folder: "MEDIUM"
      count: 278
     
    - folder: "A BIT HARD"
      count: 120
      
    - folder: "HARD"
      count: 55
      
    - folder: "EXTREMELY HARD"
      count: 16
      
    - folder: "INSANE"
      count: 5
      
    - folder: "BRAINFUCK"
      count: 11

    

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

