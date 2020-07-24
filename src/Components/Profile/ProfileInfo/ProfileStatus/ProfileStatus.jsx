import React from "react";
import s from "./ProfileStatus.module.css";
import { Input } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";

export const ProfileStatus = ({
  status,
  setStatusText,
  editStatusText,
  newStatusText,
  cancelSetStatus,
  updateStatus,
  authId,
  clickedUserId = authId,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  let statusInputRef = React.createRef();

  const onStatusInputChange = () =>
    editStatusText(statusInputRef.current.value);
  const onAddStatus = () => setStatusText();

  return (
    <div className={s.statusWrapper}>
      <div>
        {!isEdit ? <span className={s.statusText}>{status}</span> : null}
      </div>
      {authId == clickedUserId ? (
        <div className={s.editStatusTools}>
          {isEdit ? (
            <Input
              value={newStatusText}
              disabled={!isEdit}
              className={s.statusEdit}
              inputRef={statusInputRef}
              onChange={() => onStatusInputChange()}
            />
          ) : null}
          {isEdit ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => {
                  setIsEdit(false);
                  onAddStatus();
                  updateStatus(newStatusText);
                }}
              >
                Done
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => {
                  cancelSetStatus();
                  setIsEdit(false);
                }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit status
            </Button>
          )}
        </div>
      ) : null}
    </div>
  );
};
