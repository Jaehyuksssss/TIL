# [Git]_PROD 브랜치에 적용된 hotfix 커밋을 master에 동기화 시키는 방법



- _PROD branch에 핫픽스 된 특정 커밋이 마스터 브랜치에 동기화 되지 않은채로 작업이 진행되다 보면 
두 브랜치 간의 차이가 커져서 관리하기 어려워지기 때문에 _PROD에 핫픽스 되는 커밋은 그때마다  cherry-pick 하여서 
마스터에 동기화시켜 줍니다.

 

## 1. 커밋해시 확인
먼저 _prod 브랜치에서 핫픽스된 커밋의 해시 값을 확인합니다. 

이 값을 찾기 위해서는 해당 브랜치로 체크아웃 한 후 git log 명령어를 사용하면 됩니다.


```
git checkout _prod
git log
```
git log를 실행하면 커밋 히스토리가 나열됩니다. 

필요한 핫픽스 커밋을 찾고, 그 커밋의 해시 (예: abc1234)를 복사합니다.

## 2. master 브랜치로 전환
핫픽스 커밋을 적용할 master 브랜치로 체크아웃합니다.

master 브랜치 하단에 마스터와 일치된 브랜치를 만듭니다.

(임의로 master 밑으로 딴 브랜치를 newBranch라 함)


```
git checkout master
git checkout -b newbranch
```

## 3. cherry-pick 실행
newbranch 브랜치에서, 복사한 커밋 해시를 사용하여 cherry-pick 명령을 실행합니다.

 이렇게 하면 해당 커밋이 newbranch 브랜치에 적용됩니다.


```
git cherry-pick abc1234
```

## 4. 충돌 해결
cherry-pick 과정 중에 충돌이 발생할 수 있습니다. 

만약 충돌이 발생한다면, Git은 충돌을 해결하라고 알려주게 되고.

에디터를 사용하여 충돌을 해결한 후에는 다음 명령어를 사용하여 변경 사항을 스테이지에 추가하고 

cherry-pick을 계속 진행합니다.


```
git add . 
git cherry-pick --continue
``` 

충돌을 해결하고 나면, 커밋 메시지 에디터가 열리며 cherry-pick의 커밋 메시지를 편집할 수 있습니다.

## 5. 변경 사항 푸시하기
모든 충돌이 해결되고 핫픽스가 newbranch 브랜치에 성공적으로 적용되면, 변경 사항을 원격 저장소에 푸시하고

master에 merge를 시킵니다.


* test link : https://github.com/Jaehyuksssss/git-test 