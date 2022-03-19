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
    }
    /* &.nav__main{
        background: black;
    } */
}
`
