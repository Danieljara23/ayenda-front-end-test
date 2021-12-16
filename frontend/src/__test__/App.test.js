/**
 * @jest-environment jsdom
 */
import React from 'react';
import browser from './mock/browser'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../ayenda/App'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appReducer from '../ayenda/reducers';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http'

const store = createStore(appReducer, applyMiddleware(
	thunkMiddleware
	));

describe("loading status", ()=>{
  test("render progress loading", ()=>{
    render(<Provider store={store}>
      <App />
    </Provider>
    );
    expect(screen.getByText(/Loading\.\./i)).toBeInTheDocument()
  });
  
  test('render error loading data', async ()=>{
   render(<Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(()=>screen.getByText(/Marvel app error/i))
    expect(screen.getByText(/Marvel app error/i)).toBeInTheDocument()
  });
  
  test('render no comics data',async ()=> {
    render(<Provider store={store}>
          <App />
        </Provider>
      );
      await waitFor(()=>screen.getByText(/No hay datos para mostrar, intenta más tarde/i))
      expect(await screen.getByText(/No hay datos para mostrar, intenta más tarde/i)).toBeInTheDocument()
  
  });
});


describe("react component", ()=>{
  test("render comic compoenent", ()=> {
    const apiData = {
      "id": 82967,
      "digitalId": 0,
      "title": "Marvel Previews (2017)",
      "issueNumber": 0,
      "variantDescription": "",
      "description": null,
      "modified": "2019-11-07T08:46:15-0500",
      "isbn": "",
      "upc": "75960608839302811",
      "diamondCode": "",
      "ean": "",
      "issn": "",
      "format": "",
      "pageCount": 112,
      "textObjects": [],
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/82967",
      "urls": [
        {
          "type": "detail",
          "url": "http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=d97f70ac04b1fc04d2367d0509168a53"
        }
      ],
      "series": {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
        "name": "Marvel Previews (2017 - Present)"
      },
      "variants": [
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/82965",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/82970",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/82969",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/74697",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/72736",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/75668",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65364",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65158",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65028",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/75662",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/74320",
          "name": "Marvel Previews (2017)"
        },
        {
          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73776",
          "name": "Marvel Previews (2017)"
        }
      ],
      "collections": [],
      "collectedIssues": [],
      "dates": [
        {
          "type": "onsaleDate",
          "date": "2099-10-30T00:00:00-0500"
        },
        {
          "type": "focDate",
          "date": "2019-10-07T00:00:00-0400"
        }
      ],
      "prices": [
        {
          "type": "printPrice",
          "price": 0
        }
      ],
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
      },
      "images": [],
      "creators": {
        "available": 1,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021",
            "name": "Jim Nausedas",
            "role": "editor"
          }
        ],
        "returned": 1
      },
      "characters": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters",
        "items": [],
        "returned": 0
      },
      "stories": {
        "available": 2,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories",
        "items": [
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698",
            "name": "cover from Marvel Previews (2017)",
            "type": "cover"
          },
          {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699",
            "name": "story from Marvel Previews (2017)",
            "type": "interiorStory"
          }
        ],
        "returned": 2
      },
      "events": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events",
        "items": [],
        "returned": 0
      }
    }
    const {id, title, thumbnail, description, prices, characters} = apiData;
    render(
      <ComicData 
        id={id}
        title={title}
        img={thumbnail}
        description={description}
        prices={prices}
        creators={characters}
    />);
    expect(screen.getByText(/Marvel Previews (2017)/i)).toBeInTheDocument()
  })
  
  test("render comics list component is ok", async ()=>{
      render(<Provider store={store}>
        <App />
      </Provider>
    );
  
    await waitFor(() => screen.getAllByText(/open/i));
    const expecteNodeList = 10;
    const nodeList =  screen.getAllByText(/open/i);
  
    expect(nodeList.length).toBe(expecteNodeList);
  }); 
  
  
})
