import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Drawer} from '@material-ui/core';




const useStyles = makeStyles({
        table: {
         
        },
        tablecell:{
          textAlign:"center",
        }
      });
      const createData =(day,hour, follow,  comments)=>{
        return { day,hour, follow,  comments };
      }
      const rows = [
        createData('شنبه', 159, 6.0, 4.0),
        createData('یکشنبه', 237, 9.0, 4.3),
        createData('دوشنبه', 262, 16.0, 6.0),
        createData('سه شنبه', 305, 3.7, 4.3),
        createData('چهارشنبه', 356, 16.0, 3.9),
        createData('پنجشنبه', 356, 16.0, 3.9),
        createData('جمعه', 356, 16.0, 3.9),
      ];
const TableD = () => {
        const classes = useStyles()

       
              
        return (
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.tablecell}>روز</TableCell>
                      <TableCell className={classes.tablecell}>ساعت</TableCell>
                      <TableCell className={classes.tablecell}>دنبال کننده</TableCell>
                      <TableCell className={classes.tablecell}>نظرات</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.day}>
                        <TableCell className={classes.tablecell} component="th" scope="row">
                          {row.day}
                        </TableCell>
                        <TableCell className={classes.tablecell}>{row.hour}</TableCell>
                        <TableCell className={classes.tablecell}>{row.follow}</TableCell>
                        <TableCell className={classes.tablecell}>{row.comments}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        );
};

export default TableD;