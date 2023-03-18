import React,{useStyles} from 'react'
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import {
//   loadCurrentItem,
//   addToCart,
// } from "../../../redux/Shopping/shopping-actions";
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Product.css'
import * as actionTypes from '../../../redux/actions'
import { connect } from 'react-redux';


function Product2({ product, addToCart, loadCurrentItem }) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom:'5%'
    },
    media: {
      height: '40vh',
    }
  });
  const history = useNavigate();
    const classes = useStyles();
    const handleOnClick = ()=>{
      loadCurrentItem(product);
      history(`/product/${product.id}`)
      // history.push({
      //   pathname:`/product/${product.id}`,
      //   state: product
      // })
      
    }
    return (
        <Card className={classes.root}>
      
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
            
          />
          <CardContent className={classes.cardstyle}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{height: '26vh'}}>
              {product.description}
            </Typography>
            <br/>
            <Typography variant="h5" align='center' color="textPrimary" >
              {product.price}&nbsp;₹
            </Typography>
          </CardContent>
       
        <CardActions >
      
          <Button  size="small" color="primary" onClick={handleOnClick}>
            View Item
          </Button>
          
          <Button size="small" color="primary" onClick={() => addToCart(product.id)}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return{
    loadCurrentItem : (item) => dispatch({type:actionTypes.LOAD_CURRENT_ITEM,payload:{item:item}}),
    addToCart : (id) => dispatch({type:actionTypes.ADD_TO_CART,payload:{id:id}})
  }
}

export default connect(null,mapDispatchToProps)(Product2)