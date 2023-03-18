import React, { useState, useEffect,useStyles } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { connect } from "react-redux";
import "./Navbar.css";

function Navbar({cart}) {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    tool:{
        position:"relative"
    }
  });
    const [cartCount, setCartCount] = useState(0);
 
    
    useEffect(() => {
      let count = 0;
      cart.forEach((item) => {
        count += item.qty;
      });
      console.log('na')
    
      setCartCount(count);
    }, [cart, cartCount]);

  const classes = useStyles();
    return (
      
     
        <div className={classes.root}>
     
        <AppBar style={{backgroundColor:'#badc58'}} position="static">
          <Toolbar className={classes.tool}>
            
            <Typography variant="h6" className={classes.title}>
              <Link to='/' style={{color:'#2f3542'}}>
              Redux Shopping
              </Link>
            </Typography>
            <Link to='/cart' style={{color:'#2f3542'}}>
            <Button color="inherit">Cart<ShoppingCartIcon style={{marginLeft:'12%', marginRight:'1%'}}/><span className='cartNumber' style={{}}>{cartCount}</span></Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    )
}

const mapStateToProps = (state) => {

  return{
    cart : state.cart
  }
}

export default connect(mapStateToProps)(Navbar);