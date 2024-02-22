import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";


export const useDispatchedActions = (actionCreators:any) => { //will change type
    
    const dispatch = useDispatch();

    return useMemo(() =>
    bindActionCreators(actionCreators, dispatch), [dispatch])
}