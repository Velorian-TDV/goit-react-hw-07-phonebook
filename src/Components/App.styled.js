import { styled } from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px;
    min-width: 400px;
    max-width: 400px;

    border: 1px solid rgba(128, 128, 128, 0.1);
    border-radius: 15px;
    background: #2e2e2e;
    box-shadow:  20px 15px 35px #242424,
                -20px -15px 35px #383838;

    h2{
        text-align: center;
        color: lightseagreen;
        margin-bottom: 10px;
    }

    label{
        display: block;
        width: 100%;
        color: rgb(149, 236, 226);
    }

    input{
        width: 100%;
        height: 35px;
        
        color: lightgray;
        outline: none;

        border: 1px solid rgba(128, 128, 128, 0.12);
        border-radius: 5px;
        background: #2e2e2e;
        box-shadow: inset 10px 10px 20px #242424,
                    inset 0px 0px 3px #383838;
    }

    .form{
        padding-bottom: 10px;

        section{
            margin-top: 10px;
            &:first-child{
                margin-top: 0px;
            }

            label{
                display: block;
                width: 100%;
                text-transform: capitalize;
                margin-bottom: 5px;
            }

            input{
                width: 100%;
                padding: 0px 15px;
            }
        }
        
        button{
            width: 100%;
            margin: 20px 0px;
            padding: 10px;

            color: lightseagreen;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 1px;

            border: 1px solid rgba(128, 128, 128, 0.12);
            border-radius: 5px;
            background: linear-gradient(145deg, #313131, #292929);
            box-shadow:  5px 10px 10px #242424,
                        -5px -5px 10px #383838;

            &:active{
                background: #2e2e2e;
                box-shadow: inset 20px 20px 33px #242424,
                            inset -20px -20px 33px #383838;
            }
        }
    }

    .search{
        label{
            margin-bottom: 10px;
        }
        input{
            padding: 0px 15px;
            border: none;
            border: 1px solid rgba(128, 128, 128, 0.12);
            outline: none;
        }
    }

    .contacts{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        min-height: 200px;

        .empty{
            color: gray;
        }
        
        ul{
            margin-top: 20px;
            min-height: 150px;
            max-height: 180px;
            width: 100%;
            padding: 0px 10px 0px 0px;

            list-style-type: none;
            overflow-y: scroll;


            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-thumb {
                background-color:rgba(32, 178, 171, 0.473);
                border-radius: 15px;
            }

            li{
                display: flex;
                overflow: hidden;
                margin-top: 10px;
                padding: 5px;

                border-bottom: .1px solid rgba(32, 178, 171, 0.473);

                p{
                    margin-right: 10px;
                    letter-spacing: .5px;
                    color: lightgray;
                }

                button{
                    margin-left: auto;
                    padding: 5px 10px;
                    max-height: 30px;
                    min-height: 30px;

                    color: lightseagreen;
                    letter-spacing: .5px;

                    border: 1px solid rgba(128, 128, 128, 0.15);
                    border-radius: 5px;
                    background: linear-gradient(145deg, #313131, #292929);
                    box-shadow:  2px 2px 5px #242424,
                                -2px -2px 5px #383838;
                    &:active{
                        background: #2e2e2e;
                        box-shadow: inset 20px 20px 33px #242424,
                                    inset -20px -20px 33px #383838;
                    }
                }
            }
        }
    }
`
