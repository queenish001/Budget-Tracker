import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },
  expense: {
    backgroundColor: '#F44336',
    color: '#fff',
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
}));
