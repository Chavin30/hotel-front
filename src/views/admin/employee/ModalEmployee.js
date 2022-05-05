import React,{useState,useEffect} from 'react'
// import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

//Icons
import Fab from '@material-ui/core/Fab'
import CancelIcon from '@material-ui/icons/Cancel'
import SaveIcon from '@material-ui/icons/Save'

//validate
import validations from "./validationSchema"
import { useFormik } from "formik"
import * as yup from "yup"

const ModalEmployee = ({ action, handleClose, setLoader, open ,roles,handleForm,saveData,initialForm}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #cecece',
        borderRadius: 10,
        boxShadow: '10px 5px 5px',
        p: 4,
    }
    let validationSchema = null
    if(action==='Update'){
        validationSchema = yup.object(validations.validationsFormUpdate)
    }else{
        validationSchema = yup.object(validations.validationsFormCreate)
    }

    const formik = useFormik({
        initialValues : initialForm,
        enableReinitialize:true,
        onSubmit: (values,{resetForm}) =>{
            saveData(values)
            resetForm()
        },
        validationSchema: validationSchema
    })

    return (
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {`${action} Employee`}
            </Typography>
            
            <form>
                <TextField 
                    id="name" 
                    name='name' 
                    label="First name" 
                    fullWidth  
                    margin="dense" 
                    variant="outlined" 
                    autoComplete='off' 
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    onBlur = {formik.handleBlur}
                />
                <TextField 
                    id="lastname" 
                    name='lastname' 
                    label="Last name" 
                    fullWidth  
                    margin="dense" 
                    variant="outlined" 
                    autoComplete='off' 
                    value={formik.values.lastname} 
                    onChange={formik.handleChange} 
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                    onBlur = {formik.handleBlur}
                    
                />
                <TextField 
                    id="email" 
                    name='email' 
                    label="email" 
                    fullWidth  
                    margin="dense" 
                    variant="outlined" 
                    autoComplete='off' 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur = {formik.handleBlur}
                />

                {action==='Update'
                    ?''
                    :<TextField
                        id="pass" 
                        name='pass' 
                        label="password" 
                        fullWidth  
                        margin="dense" 
                        variant="outlined" 
                        autoComplete='off' 
                        value={formik.values.pass} 
                        onChange={formik.handleChange} 
                        error={formik.touched.pass && Boolean(formik.errors.pass)}
                        helperText={formik.touched.pass && formik.errors.pass}
                        onBlur = {formik.handleBlur}
                    />
                }
                
                <TextField 
                    select id="RoleId" 
                    name='RoleId' 
                    label="role" 
                    fullWidth  
                    margin="dense" 
                    variant="outlined" 
                    value={formik.values.RoleId} 
                    onChange={formik.handleChange} 
                    error={formik.touched.RoleId && Boolean(formik.errors.RoleId)}
                    helperText={formik.touched.RoleId && formik.errors.RoleId}
                    onBlur = {formik.handleBlur}
                >
                    {roles.map((rol,index) => (
                        <MenuItem key={index} value={rol.id}>
                            {rol.name}
                        </MenuItem>
                    ))}
                </TextField>
                <Grid>
                    <Fab onClick={formik.handleSubmit} color="primary" aria-label="add" size="small" style={{float:'right',marginTop:'20px',marginRight:'10px'}}>
                        <SaveIcon />
                    </Fab>
                    <Fab onClick={handleClose} color="secondary" aria-label="add" size="small" style={{float:'right',marginTop:'20px',marginRight:'10px'}}>
                        <CancelIcon />
                    </Fab>
                </Grid>
            </form>

        </Box>
        </Modal>
    )
}

export default ModalEmployee