```
npm install
# or
yarn
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project structure: how to create a page
### Page layout sample:
![HTML Layout Elements](https://www.w3schools.com/html/img_sem_elements.gif)
```
|-- app (define page)
|   |-- page folder (dashboard)
|   ...
|-- layouts (layout of the page which may have header, footer, etc as big sec )
|   |-- page folder (dashboard)
|       |-- index.js (export the layout)
|       |-- header.js
|       |-- footer.js
|       |-- sidebar.js
|       ...
|   ...
|-- sections
    |-- page folder
        |-- header folder (contains sections in header of layout)
        |-- footer folder (same as above)
        |-- sidebar folder (same as above)
        |-- section.js (StatisticBoard)
        ...
|-- components
    |-- page folder
        |-- header folder (contains components in section of header's sections)
        |-- footer folder (same as above)
        |-- sidebar folder (same as above)
        |-- component.js (BarChart)
        ...
Do not need to create the folder if empty!
```
