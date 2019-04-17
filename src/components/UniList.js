import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  cardMargin: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 16,
    height: '100%',
  },
  cardBtn:{
    height: '100%'
  },
  card:{
    display:'flex',
    flexDirection:'column',
    height: '100%',
    alignItems: 'center',
    flexGrow: 1
  },
  cardImg:{
    width:'auto',
    maxHeight: 120
  }
};

class UniList extends React.Component {
  render() {
    const { dataList, onItemClick } = this.props;
    return (
      <Grid container spacing={0}>
        {dataList.map(data => (
          <Grid item key={data._id} xs={12} md={3}>
            <div style={styles.cardMargin}>
              <CardActionArea onClick={onItemClick(`/uni/${data._id}`)} style={styles.cardBtn}>
                <Card style={styles.card}>
                  <CardHeader title={data.name} />
                  <CardMedia
                    component="img"
                    title={data.name}
                    image={data.icon}
                    style={styles.cardImg}
                  />
                </Card>
              </CardActionArea>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default UniList;
