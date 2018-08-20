import { connect } from 'react-redux'
import getMyBooks from '../../redux/actionsCreators/myBooks';
import MyBooks from './myBooks';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)

  return {
    myBooks: state.favorites.favorites,
    isLoading: state.favorites.isLoading,
    error: state.favorites.error
  }
}

const mapDispatchToProps = {
  getMyBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);