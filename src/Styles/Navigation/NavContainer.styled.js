import styled from 'styled-components'

export const NavContainer = styled.div`
    &.nav{
        .nav{
            &__top{
               
                &-container{
                    padding: 5px;
                    width: 100%;
                    height: 45px;
                    color: ${(props) => props.theme.colors.colorCultured};
                    background-color: ${(props) => props.theme.colors.colorOnyx};
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .socialIcons{
                        margin-left: 10px;
                        gap: 5px;
                        display: flex;
                    }

                    .account{
                        margin-right: 10px;
                        &-link{
                            text-decoration: none;
                            display: flex;
                            align-items: center;
                            gap: 5px;
                            color: ${(props) => props.theme.colors.colorCultured}
                        }
                    }
             }
        }

        &__main{
            width: 100%;
            height: 60px;
            color: ${(props) => props.theme.colors.colorTeal};
            background:${(props) => props.theme.colors.colorTimberWolf} ;
            box-shadow: 0px 2px 2px rgba(213, 210, 210, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            /* position: sticky; */

            .title{
                margin-left: 25px;
                font-weight: 700;
                font-size: 25px;
                line-height: 29px;
            }

            .container{
               .list{
                    display: flex;
                    gap: 50px;  
                    font-weight: 600;
                    font-size: 16px;
                    text-transform: uppercase;
                    line-height: 23px;
                   li {
                    list-style:none;
                        .item{
                            text-decoration: none;
                            color:${(props) => props.theme.colors.colorOnyx};
                        }
                   }
               }
            }

            .cart{
                margin-right: 10px;
                display: flex;
                gap: 8px;
                cursor: pointer;
            }
        }

    }
    /* &.nav__main{
        background: black;
    } */
}
`
