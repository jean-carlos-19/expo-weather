import React from 'react';
import { Items } from './Items';
import { Search } from './Search';
import { Formik } from 'formik';
import { SearchFormProps } from '@/types';

const SearchForm = (props: SearchFormProps) => {
 const {
  validationSchema,
  showSearch,
  location,
  toogleSearch,
  handleSubmit,
  handleWeather,
  handleLocation,
 } = props;
 return (
  <Formik
   validateOnMount={true}
   initialValues={{ search: '' }}
   validationSchema={validationSchema}
   onSubmit={(values, action) => {
    action.resetForm();
    handleSubmit(values.search);
   }}
  >
   {(props) => {
    const { values, handleSubmit, handleChange, handleBlur, resetForm } = props;
    handleWeather(values.search);
    return (
     <>
      <Search
       id={'search'}
       handleSubmit={handleSubmit}
       show_search={showSearch}
       toogle_search={toogleSearch}
       value={values.search}
       handleChange={handleChange}
       handleBlur={handleBlur}
      />
      <Items
       show_itemns={showSearch}
       data={location}
       hand_location={handleLocation}
       resetForm={resetForm}
      />
     </>
    );
   }}
  </Formik>
 );
};

export { SearchForm };
