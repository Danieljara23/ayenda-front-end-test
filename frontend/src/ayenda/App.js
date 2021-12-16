//import logo from './logo.svg';
import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux'
import {loadComics, findComics, findComicsByCharacter, clearFilter, paginateComics, findComicsByYears} from './actions';
import ComicDataList from './components/ComicDataList.react';
import FilterComponent from './components/FilterData.react';
import Pagination from "react-js-pagination";

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { COMICS_COUNT } from './constants';
import FilterRangeComponent from './components/FilterRange.react';


class AppComponent extends React.Component {
    constructor(props){
      super(props)
      this.textInput = React.createRef();
     
      
    }

    componentDidMount(){
      const { dispatch } = this.props;
			dispatch(loadComics());
    }

    handleFindComics = (evt) =>{
      const { dispatch } = this.props;
      dispatch(findComics(this.textInput.current.value));
      evt.preventDefault();
    }

    showComicsByCharacterId = (characterId, currentFiler) => (evt) => {
      
      let filterModal =  bootstrap.Modal.getInstance(document.getElementById('filterModal'));
      filterModal.hide();
      const { dispatch } = this.props;
      dispatch(findComicsByCharacter(characterId, currentFiler));
      
    }

    clearFilter = (evt) => {
      const { dispatch } = this.props;
      dispatch(clearFilter());
      this.handleModal();
    }

    handleModal(){
      let filterModal =  bootstrap.Modal.getInstance(document.getElementById('filterModal'));
      if(filterModal)
        filterModal.hide();
    }
    handlePageChange = (evt) => {
      const { dispatch } = this.props;
      dispatch(paginateComics(evt));
    }

    findComicsByYear = (start, end) => {
      const { dispatch } = this.props;
      this.handleModal();
      dispatch(findComicsByYears(start, end));

      
    }

    render(){
      const {items, characters, error, entities, userView, isFetching, current, offset, total, itemPerPage, activePage} = this.props;
      return (
        <div className="container-fluid ">
          <div className="row bg-danger mb-3 justify-content-center">
            <div className="col-auto">
            <img className='logo' height='40' src='/img/MarvelLogoAPI.svg' role='presentation' />
            </div>
          </div>
        

        <div className="container">
          <div className="row">
              <div className="col-12">
              <div className="input-group mb-3">
                  <input ref={this.textInput} type="text" className="form-control" placeholder="Buscar por título....." aria-label="Buscar comics" aria-describedby="buscar" />
                  <button className="btn btn-outline-secondary" type="button" id="buscar" onClick={this.handleFindComics}>Buscar</button>
                </div>

              </div>
            </div>
            <div className="row  d-sm-flex d-md-none justify-content-center">
              <div className="col-auto">
                <a className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#filterModal">Ver más filtros</a>
              </div>
            </div>
          {isFetching && (
              <div className="row p-4 justify-content-center">
                <div className="col-auto">
                  <div className="progress-app"><div></div><div></div>
                  </div>
                  <h4>Loading..</h4>
                </div>
              </div>
            ) }

          {error && (<div className="row p-4 justify-content-center" >
              <div className="col-auto">
              <div className="toast show" style={{autohide: "false"}} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                  <strong className="me-auto">Marvel app error</strong>
                  <small>Status</small>
                  <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                  No hay datos para mostrar, intenta más tarde
                </div>
              </div>
                 </div>
            </div>)
    }

<div className="modal fade" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Más filtros</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="row">
                <div className="col-auto">
                  <FilterRangeComponent findComicsByYears={this.findComicsByYear} />
                </div>
            </div>
              <div className="row">
                <div className="col-12">
                <FilterComponent clearFilter={this.clearFilter} characters={characters} showComicsByCharacterId={this.showComicsByCharacterId} currentFilter={current}/>
                </div>
              </div>
      </div>
    </div>
  </div>
</div>
          <div className="row">
            <div className="col-md-3 ">
            <div className="row d-md-flex d-none">
                <div className="col-auto">
                  <FilterRangeComponent findComicsByYears={this.findComicsByYear} />
                </div>
            </div>
              <div className="row d-md-flex d-none">
                <div className="col-12">
                <FilterComponent clearFilter={this.clearFilter} characters={characters} showComicsByCharacterId={this.showComicsByCharacterId} currentFilter={current}/>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
            <div className="row justify-content-center">
              <div className="col-auto mt-2">
              {!isFetching && <Pagination
                  activePage={activePage}
                  itemsCountPerPage={itemPerPage}
                  totalItemsCount={total}
                  
                  activeLinkClass="bg-light text-dark"
                  pageRangeDisplayed={COMICS_COUNT}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={this.handlePageChange}
                />}
                </div>
            </div>
            <div className="row">
            <div className={"col-md-12 col-sm-12"}>
                  <ComicDataList entities={entities} />
            </div>
          </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  
  const { entities, items, offset, total, itemPerPage } = state.comicsReducer;
  const { characters, current } = state.filterReducer;
  const { userView, activePage } = state.uiReducer;
  
  const { isFetching, success, error, errorMessage, successMessage } = state.networkReducer;
  return {
    activePage,
    offset, total, itemPerPage,
    characters,
    current,
    entities, 
    items, 
    userView, 
    isFetching, 
    success, 
    error, 
    errorMessage, 
    successMessage,
 
  }
}

AppComponent.contextTypes = {
	store: PropTypes.object
};

AppComponent = connect(mapStateToProps)(AppComponent);


export default AppComponent;
