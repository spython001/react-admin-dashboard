
import './product.css'
import { Link } from 'react-router-dom'

export default function product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link  to='/newProduct'>
              <button className="productAddButton">Create</button>
            </Link>
        </div>
        
        <div className="productContainer">
            <div className="productShow">
                <div className="productShowTop">
                    <img 
                        src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="" 
                        className="productShowImg" 
                    />
                    <div className="productShowTopTitle">
                        <span className="productShowproductname">Anna Becker</span>
                        <span className="productShowproductTitle">Software Engineering</span>
                    </div>
                </div>
                <div className="productShowBottom">
                    <span className="productShowTitle">Account Details</span>
                    <div className="productShowInfo">
                        <PermIdentity className='productShowIcon'/>
                        <span className="productShowInfoTitle">annabeck99</span>
                    </div>
                    
                    <div className="productShowInfo">
                        <CalendarToday className='productShowIcon'/>
                        <span className="productShowInfoTitle">10.12.1997</span>
                    </div>

                    <span className="productShowTitle">Contact Details</span>
                    <div className="productShowInfo">
                        <PhoneAndroid className='productShowIcon'/>
                        <span className="productShowInfoTitle">+1 123 456 67</span>
                    </div>

                    <div className="productShowInfo">
                        <MailOutline className='productShowIcon'/>
                        <span className="productShowInfoTitle">annabeck99@gmail.com</span>
                    </div>

                    <div className="productShowInfo">
                        <LocationSearching className='productShowIcon'/>
                        <span className="productShowInfoTitle">New York | USA </span>
                    </div>
                </div>
            </div>
            
            <div className="productUpdate">
                <span className="productUpdateTitle">Edit</span>
                <form className="productUpdateForm">
                    <div className="productUpdateLeft">
                        <div className="productUpdateItem">
                            <label>productname</label>
                            <input 
                              type="text" 
                              placeholder='annabeck99' 
                              className='productUpdateInput'
                            />
                        </div>

                        <div className="productUpdateItem">
                            <label>Full Name</label>
                            <input 
                              type="text" 
                              placeholder='Anna Becker' 
                              className='productUpdateInput'
                            />
                        </div>

                        <div className="productUpdateItem">
                            <label>Email</label>
                            <input 
                              type="text" 
                              placeholder='annabeck99@gmail.com' 
                              className='productUpdateInput'
                            />
                        </div>

                        <div className="productUpdateItem">
                            <label>Phone</label>
                            <input 
                              type="number" 
                              placeholder='+1 123 456 67' 
                              className='productUpdateInput'
                            />
                        </div>

                        <div className="productUpdateItem">
                            <label>Address</label>
                            <input 
                              type="text" 
                              placeholder='New York | USA' 
                              className='productUpdateInput'
                            />
                        </div>
                        
                    </div>
                    
                    <div className="productUpdateRight">
                        <div className="productUpdateUpload">
                            <img 
                              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                              alt=""
                              className='productUpdateImg'
                            />
                            <label htmlFor="file"> <Publish className='productUpdateIcon'/></label>
                            <input type="file" id='file' style={{display: 'none'}}/>
                        </div>
                        <button className="productUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
