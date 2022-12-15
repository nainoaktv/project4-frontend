import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import UserFeedBox from './UserFeedBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Feed = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Item>SEARCHBAR</Item>
      </Grid>
      <Grid item xs={5}>
        {/* TODO: INSERT RANDOM POSTS FOR TESTING WITH 2-3 TEST USERS WITH FOLLOW REALATIONS */}
        <Item><h2>Lorem ipsum dolor sit amet, mea an quis voluptaria, in per facilis omittam molestiae, usu te delicata instructior. Sed omnes probatus consequat ex. Delenit honestatis deterruisset quo ad, magna bonorum mei cu. Dicant adipiscing intellegam qui ut, per quis aliquip an. Cu sea labore repudiandae comprehensam, has illud dissentiet eu.

          At eum latine labores, graecis ullamcorper quo an. Usu nostrud maiorum in, cu nec nibh delenit reformidans. Vel mundi tacimates id. Possim interpretaris quo id, in vidit omnis legimus pro. Vix te quem definitionem, ne vel quodsi vivendo.

          An quis quodsi utroque ius, ei mei fugit simul omnesque. In eum prima eripuit dolores. Eos at dico docendi. Veritus persecuti pri ex, vis hinc vocent ne, pri ea detracto recusabo scripserit. Illud eloquentiam eu quo. Pro soluta facilis mediocrem te. At duo feugiat ponderum eloquentiam, vix et dicta viris.

          Mutat impedit argumentum est ne. Vel id oratio labore ullamcorper, ad usu simul detracto ponderum, vidit ipsum menandri in duo. Vix ea cetero pertinax, nec nihil nostrum ne, nec at putant utamur conclusionemque. Vel ea suscipit suavitate definitiones, at nec utroque ceteros delectus. Quo vocent erroribus id, eum suscipit definitionem et, ei utroque appellantur has.

          Ut sea odio nemore tritani, id nam paulo fuisset, ne molestiae eloquentiam per. Oratio ullamcorper usu id. Cum ludus iudicabit eu, tamquam delectus sed ad. Purto fastidii vix id, est modo explicari et. An quo civibus referrentur. Lorem ipsum dolor sit amet, mea an quis voluptaria, in per facilis omittam molestiae, usu te delicata instructior. Sed omnes probatus consequat ex. Delenit honestatis deterruisset quo ad, magna bonorum mei cu. Dicant adipiscing intellegam qui ut, per quis aliquip an. Cu sea labore repudiandae comprehensam, has illud dissentiet eu.

          At eum latine labores, graecis ullamcorper quo an. Usu nostrud maiorum in, cu nec nibh delenit reformidans. Vel mundi tacimates id. Possim interpretaris quo id, in vidit omnis legimus pro. Vix te quem definitionem, ne vel quodsi vivendo.

          An quis quodsi utroque ius, ei mei fugit simul omnesque. In eum prima eripuit dolores. Eos at dico docendi. Veritus persecuti pri ex, vis hinc vocent ne, pri ea detracto recusabo scripserit. Illud eloquentiam eu quo. Pro soluta facilis mediocrem te. At duo feugiat ponderum eloquentiam, vix et dicta viris.

          Mutat impedit argumentum est ne. Vel id oratio labore ullamcorper, ad usu simul detracto ponderum, vidit ipsum menandri in duo. Vix ea cetero pertinax, nec nihil nostrum ne, nec at putant utamur conclusionemque. Vel ea suscipit suavitate definitiones, at nec utroque ceteros delectus. Quo vocent erroribus id, eum suscipit definitionem et, ei utroque appellantur has.

          Ut sea odio nemore tritani, id nam paulo fuisset, ne molestiae eloquentiam per. Oratio ullamcorper usu id. Cum ludus iudicabit eu, tamquam delectus sed ad. Purto fastidii vix id, est modo explicari et. An quo civibus referrentur.</h2></Item>
      </Grid>
      <Grid item xs={4}>
        <Item><UserFeedBox /></Item>
      </Grid>
    </Grid>
  )
}

export default Feed;