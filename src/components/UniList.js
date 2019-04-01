import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = {
  cardMargin: {
    marginRight: 16,
    marginLeft: 16,
    marginTop: 16
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
              <CardActionArea onClick={onItemClick(`/uni/${data._id}`)}>
                <Card>
                  <CardHeader title={data.name} />
                  <CardMedia
                    component="img"
                    title={data.name}
                    image={data.icon}
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
