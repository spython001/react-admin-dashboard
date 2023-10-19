import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@mui/icons-material'

export default function product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link  to='/newProduct'>
              <button className="productAddButton">Create</button>
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey='Sales' title='Sales Performance'/>
            </div>
            <div className="productTopRight"></div>
        </div>
        <div className="productBottom"></div>
        
        <div className="productContainer">
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
