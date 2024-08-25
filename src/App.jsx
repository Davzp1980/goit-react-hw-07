import './App.css';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList />
    </div>
  );
}

export default App;
