
---
fileClass: Machine
---

<p align="center"> <img src= "https://www.hackthebox.com//storage/avatars/bf928375e067672d42a572d81684537b.png"> </p>

#machine

## Operation system - Linux
<img style = "max-width:70px" src = "app://local//home/axel/Escritorio/HTNotes/HTB//.res/Linux.png">

## Metadata

|                       |   |
| ----------------      | - |
| ID                    |483 |
| Name                  |Shared |
| Active                |✅  |
| User Flag             |✅ |
| Root Flag             |✅|
| Difficulty Text       |Medium  |
| Stars                 |⭐️ 4.7 |
| Created Note          |2022/11/09 |
| Published             |2022/07/23 |
| tags                  | |

<p style ="display:none">
id:: 483
active:: True
name:: Shared
os::Linux
user_flag:: True
root_flag:: True
difficulty_text:: Medium
stars:: 4.7
created:: 2022/11/09
published:: 2022/07/23
avatar:: /storage/avatars/bf928375e067672d42a572d81684537b.png
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
    score: 6
  - item: "REAL"
    user: "user"
    score: 5.8
  - item: "CVE"
    user: "user"
    score: 5.9
  - item: "CUSTOM"
    user: "user"
    score: 4.1
  - item: "CTF"
    user: "user"
    score: 4.2
  - item: "ENUM"
    user: "author"
    score: 6
  - item: "REAL"
    user: "author"
    score: 7
  - item: "CVE"
    user: "author"
    score: 6
  - item: "CUSTOM"
    user: "author"
    score: 4
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
      count: 43
     
    - folder: "VERY EASY"
      count: 52

    - folder: "EASY"
      count: 235
      
    - folder: "NOT TO EASY"
      count: 588
      
    - folder: "MEDIUM"
      count: 942
     
    - folder: "A BIT HARD"
      count: 392
      
    - folder: "HARD"
      count: 196
      
    - folder: "EXTREMELY HARD"
      count: 55
      
    - folder: "INSANE"
      count: 9
      
    - folder: "BRAINFUCK"
      count: 23

    

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

