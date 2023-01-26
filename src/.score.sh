npm test &> result.txt
cmd=$(grep "failed" result.txt)
pass=0
if [[ -z ${cmd} ]];then
((pass++))
fi
score=$(($pass*100))
echo FS_SCORE:$score%